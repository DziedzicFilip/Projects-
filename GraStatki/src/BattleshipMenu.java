import javax.swing.*;
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.File;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BattleshipMenu extends JFrame {
    private final String musicFilePath = "music/pirate-tavern-full-version.mp3";
    private MusicPlayer musicPlayer;
    private  static  int width=1200;
    private  static  int height=600;
    public BattleshipMenu() {
        setTitle("Battleship Menu");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        playBackgroundMusic();
        setLocationRelativeTo(null);
        JPanel buttonPanel = new JPanel(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.anchor = GridBagConstraints.CENTER;

        JButton startButton = createStyledButton("Start");
        JButton settingsButton = createStyledButton("Ustawienia");
        JButton resultsButton = createStyledButton("Wyniki");

        startButton.addActionListener(e -> {
            BattleshipGame game = new BattleshipGame();
            BattleshipGUI gui = new BattleshipGUI(game, width,height);
            musicPlayer.stop();
            gui.setVisible(true);
        });

        settingsButton.addActionListener(e -> openSettingsDialog());
        resultsButton.addActionListener(e -> openResultsDialog());

        buttonPanel.add(startButton, gbc);
        gbc.gridy++;
        buttonPanel.add(settingsButton, gbc);
        gbc.gridy++;
        buttonPanel.add(resultsButton, gbc);


        JPanel gradientPanel = new JPanel();
        gradientPanel.setLayout(new BorderLayout());
        gradientPanel.add(buttonPanel, BorderLayout.CENTER);
        setContentPane(gradientPanel);


        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                super.windowClosing(e);
                stopBackgroundMusic();
            }
        });
    }


    private JButton createStyledButton(String text) {
        JButton button = new JButton(text);
        button.setPreferredSize(new Dimension(150, 40));
        button.setBackground(new Color(0, 153, 204));
        button.setForeground(Color.WHITE);
        button.setFocusPainted(false);
        button.setFont(new Font("Arial", Font.BOLD, 14));
        button.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(new Color(0, 102, 153), 2),
                BorderFactory.createEmptyBorder(5, 15, 5, 15)));
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
        button.setOpaque(true);
        return button;
    }

    private void openSettingsDialog() {
        JDialog settingsDialog = new JDialog(this, "Ustawienia", true);
        settingsDialog.setSize(400, 300);
        settingsDialog.setLayout(new GridBagLayout());

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.anchor = GridBagConstraints.WEST;

        JLabel windowSizeLabel = new JLabel("Wielkość okna gry:");
        settingsDialog.add(windowSizeLabel, gbc);
        gbc.gridx = 1;
        JComboBox<String> windowSizeComboBox = new JComboBox<>(new String[]{
                "1920x1080", "1600x900", "1366x768", "1280x720"
        });
        settingsDialog.add(windowSizeComboBox, gbc);


        gbc.gridx = 0;
        gbc.gridy++;
        gbc.gridwidth = 2;
        gbc.anchor = GridBagConstraints.CENTER;
        JButton saveButton = createStyledButton("Zapisz");
        saveButton.addActionListener(e -> {
            String windowSize = (String) windowSizeComboBox.getSelectedItem();
            String[] dimensions = windowSize.split("x");
            int width = Integer.parseInt(dimensions[0]);
            int height = Integer.parseInt(dimensions[1]);
            BattleshipMenu.height=height;
            BattleshipMenu.width=width;
            settingsDialog.dispose();
        });
        settingsDialog.add(saveButton, gbc);


        JPanel gradientPanel = new JPanel() {};
        gradientPanel.setLayout(new BorderLayout());
        gradientPanel.add(settingsDialog.getContentPane(), BorderLayout.CENTER);
        settingsDialog.setContentPane(gradientPanel);

        settingsDialog.setLocationRelativeTo(this);
        settingsDialog.setVisible(true);
    }



    private void openResultsDialog() {
        JDialog resultsDialog = new JDialog(this, "Wyniki", true);
        resultsDialog.setSize(500, 400);

        String[] columnNames = {"Rezultat", "Data gry", "Czas gry"};
        Object[][] data = readResultsFromFile();

        JTable resultsTable = new JTable(data, columnNames);
        JScrollPane scrollPane = new JScrollPane(resultsTable);
        resultsTable.setFillsViewportHeight(true);

        JPanel tablePanel = new JPanel(new BorderLayout());
        tablePanel.add(scrollPane, BorderLayout.CENTER);

        JPanel gradientPanel = new JPanel() {};
        gradientPanel.setLayout(new BorderLayout());
        gradientPanel.add(tablePanel, BorderLayout.CENTER);
        resultsDialog.setContentPane(gradientPanel);

        resultsDialog.setLocationRelativeTo(this);
        resultsDialog.setVisible(true);
    }

    private Object[][] readResultsFromFile() {
        java.util.List<Object[]> results = new java.util.ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader("game_results.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                results.add(new Object[]{parts[0], parts[1], parts[2]});
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return results.toArray(new Object[0][]);
    }



    private void playBackgroundMusic() {
        try {
            musicPlayer = new MusicPlayer(musicFilePath,1f);
            musicPlayer.play();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    private void stopBackgroundMusic() {
        if (musicPlayer != null) {
            musicPlayer.stop();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            BattleshipMenu menu = new BattleshipMenu();
            menu.setVisible(true);
        });
    }
}