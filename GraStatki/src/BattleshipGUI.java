import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class BattleshipGUI extends JFrame {
    private BattleshipGame game;
    private JButton[][] playerButtons;
    private JButton[][] computerButtons;
    private JButton toggleOrientationButton;
    private int boardSize;
    private JTextArea statusTextArea;
    private JLabel playerShipsStatusLabel;
    private JLabel computerShipsStatusLabel;
    private JPanel computerStatusPanel;
    private Color lightBlue = new Color(0, 153, 204);
    private MusicPlayer musicPlayer;
    private String musicFilePath = "music/battle-ship-loop.mp3";
    private SoundEffectPlayer soundEffectPlayerHIT;
    private SoundEffectPlayer soundEffectPlayerSUNK;
    private String soundEffectFilePathHIT = "music/HIT.mp3";
    private String soundEffectFilePathSUNK = "music/SUNK.mp3";
    private long gameStartTime;

    public BattleshipGUI(BattleshipGame game, int width, int height) {
        this.game = game;
        this.boardSize = game.getBoardSize();
        this.playerButtons = new JButton[boardSize][boardSize];
        this.computerButtons = new JButton[boardSize][boardSize];

        setTitle("Gra w Statki");
        setSize(width, height);
        playBackgroundMusic();
        gameStartTime = System.currentTimeMillis();
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        setLayout(new BorderLayout());

        JPanel mainPanel = new JPanel(new BorderLayout(10, 10));
        JPanel playerGridPanel = new JPanel(new BorderLayout());
        JPanel computerGridPanel = new JPanel(new BorderLayout());
        JPanel playerButtonsPanel = new JPanel(new GridLayout(boardSize, boardSize, 2, 2));
        JPanel computerButtonsPanel = new JPanel(new GridLayout(boardSize, boardSize, 2, 2));
        JPanel statusPanel = new JPanel(new BorderLayout());
        JPanel playerPanel = new JPanel(new BorderLayout());
        JPanel computerPanel = new JPanel(new BorderLayout());
        playerButtonsPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        computerButtonsPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        for (int i = 0; i < boardSize; i++) {
            for (int j = 0; j < boardSize; j++) {
                playerButtons[i][j] = new JButton();
                playerButtons[i][j].setBackground(lightBlue);
                playerButtons[i][j].addMouseListener(new PlayerButtonMouseListener(i, j));
                playerButtons[i][j].addActionListener(new PlayerButtonClickListener(i, j));
                playerButtonsPanel.add(playerButtons[i][j]);

                computerButtons[i][j] = new JButton();
                computerButtons[i][j].setBackground(lightBlue);
                computerButtons[i][j].addActionListener(new ButtonClickListener(i, j));
                computerButtonsPanel.add(computerButtons[i][j]);
            }
        }

        playerShipsStatusLabel = new JLabel("Statki do rozmieszczenia: " + getShipsToPlace());
        computerShipsStatusLabel = new JLabel("Atakuj tu ");

        playerGridPanel.add(playerShipsStatusLabel, BorderLayout.NORTH);
        playerGridPanel.add(playerButtonsPanel, BorderLayout.CENTER);

        computerStatusPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        computerStatusPanel.add(computerShipsStatusLabel);
        computerGridPanel.add(computerStatusPanel, BorderLayout.NORTH);
        computerGridPanel.add(computerButtonsPanel, BorderLayout.CENTER);

        statusTextArea = new JTextArea();
        statusTextArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(statusTextArea);
        scrollPane.setPreferredSize(new Dimension(150, 200));
        statusPanel.add(scrollPane, BorderLayout.CENTER);
        statusPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        toggleOrientationButton = new JButton("Obróć statek (Horizontal)");
        toggleOrientationButton.addActionListener(e -> toggleOrientation());

        toggleOrientationButton.setBackground(new Color(70, 130, 180));
        toggleOrientationButton.setForeground(Color.WHITE);
        toggleOrientationButton.setFont(new Font("Arial", Font.BOLD, 14));
        toggleOrientationButton.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        playerPanel.add(playerGridPanel, BorderLayout.CENTER);
        playerPanel.add(toggleOrientationButton, BorderLayout.SOUTH);

        computerPanel.add(computerGridPanel, BorderLayout.CENTER);

        mainPanel.add(playerPanel, BorderLayout.WEST);
        mainPanel.add(statusPanel, BorderLayout.CENTER);
        mainPanel.add(computerPanel, BorderLayout.EAST);
        add(mainPanel, BorderLayout.CENTER);

        updatePlayerBoard();
        updateStatus("Ustaw Staki na planszy.");
    }

    private String getShipsToPlace() {
        StringBuilder sb = new StringBuilder();
        for (int i = game.getCurrentShipIndex(); i < game.getShips().length; i++) {
            sb.append(game.getShips()[i]).append(" ");
        }
        return sb.toString();
    }



    private void saveGameResult(boolean playerWon) {
        String result = playerWon ? "Win" : "Lose";
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String date = now.format(formatter);
        long gameEndTime = System.currentTimeMillis();
        long duration = (gameEndTime - gameStartTime) / 1000;

        try (FileWriter writer = new FileWriter("game_results.txt", true)) {
            writer.write(result + "," + date + "," + duration + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void showEndGameDialog(boolean playerWon) {
        String message = playerWon ? "Gratulacje! Wyugrałes!" : "Przegrałeś!";
        String gifPath = playerWon ? "img/Win.gif" : "img/Lose.gif";
        ImageIcon gifIcon = new ImageIcon(gifPath);

        JPanel panel = new JPanel(new BorderLayout());
        panel.add(new JLabel(gifIcon), BorderLayout.CENTER);
        panel.add(new JLabel(message, SwingConstants.CENTER), BorderLayout.SOUTH);

        int response = JOptionPane.showOptionDialog(this, panel, "Koniec gry", JOptionPane.YES_NO_OPTION,
                JOptionPane.INFORMATION_MESSAGE, null, new String[]{"Zagraj jeszcze raz ", "Wyjscie"}, "Zagraj jeszcze raz"
        );

        if (response == JOptionPane.YES_OPTION) {
            dispose();
            BattleshipGame newGame = new BattleshipGame();
            BattleshipGUI newGui = new BattleshipGUI(newGame, 1200, 600);
            newGui.setVisible(true);
        } else {
            System.exit(0);
        }
    }

    private class PlayerButtonMouseListener extends MouseAdapter {
        private int row, col;

        public PlayerButtonMouseListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        @Override
        public void mouseEntered(MouseEvent e) {
            if (game.isPlacingShips() && playerButtons[row][col].getBackground() == lightBlue) {
                highlightShipPlacement(row, col, Color.GREEN);
            }
        }

        @Override
        public void mouseExited(MouseEvent e) {
            if (game.isPlacingShips() && playerButtons[row][col].getBackground() == Color.GREEN) {
                highlightShipPlacement(row, col, lightBlue);
            }
        }

        private void highlightShipPlacement(int row, int col, Color color) {
            int shipLength = game.getCurrentShipLength();
            if (game.isHorizontal()) {
                for (int i = 0; i < shipLength; i++) {
                    if (col + i < boardSize && playerButtons[row][col + i].getBackground() != Color.GRAY) {
                        playerButtons[row][col + i].setBackground(color);
                    }
                }
            } else {
                for (int i = 0; i < shipLength; i++) {
                    if (row + i < boardSize && playerButtons[row + i][col].getBackground() != Color.GRAY) {
                        playerButtons[row + i][col].setBackground(color);
                    }
                }
            }
        }
    }

    private class PlayerButtonClickListener implements ActionListener {
        private int row, col;

        public PlayerButtonClickListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            if (game.isPlacingShips()) {
                if (game.placePlayerShip(row, col)) {
                    updatePlayerBoard();
                    playerShipsStatusLabel.setText("Statki do rozmiesczenia: " + getShipsToPlace());
                    if (!game.isPlacingShips()) {
                        toggleOrientationButton.setEnabled(false);
                        updateStatus("Wszystkie statki rozmieszczone. Do Ataku!");
                    } else {
                        updateStatus("Ułożono statek, czas na kolejny");
                    }
                } else {
                    updateStatus("Nie poprawne ułożenie, spróbuje jescze raz ");
                }
            }
        }
    }

    private class ButtonClickListener implements ActionListener {
        private int row, col;

        public ButtonClickListener(int row, int col) {
            this.row = row;
            this.col = col;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            if (game.isPlacingShips()) {
                return;
            }
            if (!game.isPlayerTurn()) {
                return;
            }

            boolean hit = game.playerMove(row, col);
            if (hit) {
                animateHit(computerButtons[row][col]);
                showHitGif();
                updateStatus("Trafiłeś (" + row + ", " + col + ")!");
                soundEffectPlayerHIT = new SoundEffectPlayer(soundEffectFilePathHIT);
                soundEffectPlayerHIT.play();

                if (game.isShipSunk(game.getComputerBoard(), row, col)) {
                    animateSinking(row, col, game.getComputerBoard(), computerButtons);
                    showSunkGif();
                    updateStatus("Zatopiłeś statek!");
                    computerShipsStatusLabel.setText("Status statkó komputera ");
                }
            } else {
                animateMiss(computerButtons[row][col]);
                updateStatus("Pudło : (" + row + ", " + col + "). Kolej przeciwnika.");
            }
            updateComputerBoard();

            if (!hit) {

                while (!game.isPlayerTurn()) {
                    game.computerTurn();
                    updatePlayerBoard();
                }
                updateStatus("Twoja tura.");
            }


            if (game.allShipsSunk(game.getComputerBoard())) {
                endGame(true);
            } else if (game.allShipsSunk(game.getPlayerBoard())) {
                endGame(false);
            }
        }

        private void endGame(boolean playerWon) {
            saveGameResult(playerWon);

            disableAllButtons();
            musicPlayer.stop();
            showEndGameDialog(playerWon);
        }

        private void disableAllButtons() {
            for (int i = 0; i < boardSize; i++) {
                for (int j = 0; j < boardSize; j++) {
                    playerButtons[i][j].setEnabled(false);
                    computerButtons[i][j].setEnabled(false);
                }
            }
        }
    }

    private void toggleOrientation() {
        game.toggleOrientation();
        if (toggleOrientationButton.getText().equals("Obróć Statek(Horizontal)")) {
            toggleOrientationButton.setText("Obróć Statek (Vertical)");
        } else {
            toggleOrientationButton.setText("Obróć Statek (Horizontal)");
        }
        updateStatus("Obróć Statek  " + (game.isHorizontal() ? "Horizontal" : "Vertical") + ".");
    }

    private void animateHit(JButton button) {
        Timer timer = new Timer(200, new ActionListener() {
            private int count = 0;
            private boolean isRed = true;

            @Override
            public void actionPerformed(ActionEvent e) {
                if (isRed) {
                    button.setBackground(Color.RED);
                } else {
                    button.setBackground(Color.ORANGE);
                }
                isRed = !isRed;
                count++;
                if (count >= 6) {
                    ((Timer) e.getSource()).stop();
                    button.setBackground(Color.RED);
                }
            }
        });
        timer.start();
    }

    private void animateSinking(int row, int col, char[][] board, JButton[][] buttons) {
        Timer timer = new Timer(200, new ActionListener() {
            private int count = 0;
            private boolean isRed = true;
            private int[][] shipCoords = getShipCoordinates(row, col, board);

            @Override
            public void actionPerformed(ActionEvent e) {
                for (int[] coord : shipCoords) {
                    int r = coord[0], c = coord[1];
                    buttons[r][c].setBackground(isRed ? Color.RED : Color.ORANGE);
                }
                isRed = !isRed;
                count++;
                if (count >= 6) {
                    ((Timer) e.getSource()).stop();
                    for (int[] coord : shipCoords) {
                        int r = coord[0], c = coord[1];
                        buttons[r][c].setBackground(Color.BLACK);
                    }
                }
            }
        });
        timer.start();
    }

    private int[][] getShipCoordinates(int row, int col, char[][] board) {
        java.util.List<int[]> coords = new java.util.ArrayList<>();
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        for (int[] dir : directions) {
            int r = row, c = col;
            while (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] == 'H') {
                coords.add(new int[]{r, c});
                r += dir[0];
                c += dir[1];
            }
            r -= dir[0];
            c -= dir[1];
            while (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] == 'H') {
                coords.add(new int[]{r, c});
                r -= dir[0];
                c -= dir[1];
            }
        }
        return coords.toArray(new int[0][]);
    }

    private void updatePlayerBoard() {
        char[][] playerBoard = game.getPlayerBoard();
        for (int i = 0; i < boardSize; i++) {
            for (int j = 0; j < boardSize; j++) {
                if (playerBoard[i][j] == 'S') {
                    playerButtons[i][j].setBackground(Color.GRAY);
                } else if (playerBoard[i][j] == 'H') {
                    if (game.isShipSunk(playerBoard, i, j)) {
                        playerButtons[i][j].setBackground(Color.BLACK);
                    } else {
                        playerButtons[i][j].setBackground(Color.RED);
                    }
                } else if (playerBoard[i][j] == 'M') {
                    playerButtons[i][j].setBackground(Color.WHITE);
                } else {
                    playerButtons[i][j].setBackground(lightBlue);
                }
            }
        }
    }

    private void animateMiss(JButton button) {
        Timer timer = new Timer(200, new ActionListener() {
            private int count = 0;
            private boolean isWhite = true;

            @Override
            public void actionPerformed(ActionEvent e) {
                if (isWhite) {
                    button.setBackground(Color.WHITE);
                } else {
                    button.setBackground(lightBlue);
                }
                isWhite = !isWhite;
                count++;
                if (count >= 6) {
                    ((Timer) e.getSource()).stop();
                    button.setBackground(Color.WHITE);
                }
            }
        });
        timer.start();
    }

    private void updateComputerBoard() {
        char[][] computerBoard = game.getComputerBoard();
        for (int i = 0; i < boardSize; i++) {
            for (int j = 0; j < boardSize; j++) {
                if (computerBoard[i][j] == 'H') {
                    if (game.isShipSunk(computerBoard, i, j)) {
                        computerButtons[i][j].setBackground(Color.BLACK);
                    } else {
                        computerButtons[i][j].setBackground(Color.RED);
                    }
                } else if (computerBoard[i][j] == 'M') {
                    computerButtons[i][j].setBackground(Color.WHITE);
                } else {
                    computerButtons[i][j].setBackground(lightBlue);
                }
            }
        }
    }

    private void updateStatus(String message) {
        statusTextArea.append(message + "\n");
        statusTextArea.setCaretPosition(statusTextArea.getDocument().getLength());
    }

    private void playBackgroundMusic() {
        try {
            musicPlayer = new MusicPlayer(musicFilePath, 1f);
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

    private void showHitGif() {
        JWindow gifWindow = new JWindow();
        gifWindow.setSize(600, 338);
        gifWindow.setLayout(new BorderLayout());

        ImageIcon hitGif = new ImageIcon("img/hit.gif");
        JLabel gifLabel = new JLabel(hitGif);
        gifWindow.add(gifLabel, BorderLayout.CENTER);

        JLabel messageLabel = new JLabel("Trafiłeś!", SwingConstants.CENTER);
        messageLabel.setFont(new Font("Arial", Font.BOLD, 16));
        gifWindow.add(messageLabel, BorderLayout.SOUTH);

        gifWindow.setLocationRelativeTo(null);
        gifWindow.setVisible(true);

        Timer timer = new Timer(1000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                gifWindow.setVisible(false);
                gifWindow.dispose();
                ((Timer) e.getSource()).stop();
            }
        });
        timer.start();
    }

    private void showSunkGif() {
        JWindow gifWindow = new JWindow();
        gifWindow.setSize(500, 368);
        gifWindow.setLayout(new BorderLayout());

        ImageIcon sunkGif = new ImageIcon("img/giphy.gif");
        JLabel gifLabel = new JLabel(sunkGif);
        gifWindow.add(gifLabel, BorderLayout.CENTER);

        JLabel messageLabel = new JLabel("Zatopiłeś!", SwingConstants.CENTER);
        messageLabel.setFont(new Font("Arial", Font.BOLD, 16));
        gifWindow.add(messageLabel, BorderLayout.SOUTH);

        gifWindow.setLocationRelativeTo(null);
        gifWindow.setVisible(true);

        Timer timer = new Timer(2500, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                gifWindow.setVisible(false);
                gifWindow.dispose();
                ((Timer) e.getSource()).stop();
            }
        });
        timer.start();
    }

    public static void main(String[] args) {
        BattleshipGame game = new BattleshipGame();
        BattleshipGUI gui = new BattleshipGUI(game, 1200, 600);
        gui.setVisible(true);
    }
}
