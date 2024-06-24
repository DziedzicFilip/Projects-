import javazoom.jl.decoder.JavaLayerException;
import javazoom.jl.player.advanced.AdvancedPlayer;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class SoundEffectPlayer {
    private String musicFilePath;
    private AdvancedPlayer player;
    private boolean playing;

    public SoundEffectPlayer(String musicFilePath) {
        this.musicFilePath = musicFilePath;
    }

    public void play() {
        try {
            InputStream is = new BufferedInputStream(new FileInputStream(musicFilePath));
            player = new AdvancedPlayer(is);

            new Thread(() -> {
                try {
                    playing = true;
                    player.play();
                    is.close();
                    playing = false;
                } catch (JavaLayerException | FileNotFoundException e) {
                    e.printStackTrace();
                } catch (Exception e) {
                    e.printStackTrace();
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
}
