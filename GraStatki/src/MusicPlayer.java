import javazoom.jl.decoder.JavaLayerException;
import javazoom.jl.player.advanced.AdvancedPlayer;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class MusicPlayer {
    private String musicFilePath;
    private AdvancedPlayer player;
    private boolean playing;
    private  float volume = 1.0f;

    public MusicPlayer(String musicFilePath,float volume) {
        this.musicFilePath = musicFilePath;
        this.volume = volume;
    }

    public void play() {
        try {
            final InputStream[] is = {new BufferedInputStream(new FileInputStream(musicFilePath))};
            player = new AdvancedPlayer(is[0]);

            new Thread(() -> {
                try {
                    playing = true;
                    while (playing) {
                        player.play();
                        is[0] = new BufferedInputStream(new FileInputStream(musicFilePath));
                        player = new AdvancedPlayer(is[0]);
                    }
                } catch (JavaLayerException e) {
                    e.printStackTrace();
                } catch (FileNotFoundException e) {
                    throw new RuntimeException(e);
                }
            }).start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void stop() {
        if (player != null) {
            playing = false;
            player.close();
        }
    }


    public  void setVolume(float volume) {
        this.volume = volume;
    }


    public  float getVolume() {
        return volume;
    }
}
