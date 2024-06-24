import java.util.*;

public class BattleshipGame {
    private final int boardSize = 10;
    private final int[] ships = {5, 4, 3, 2, 1};
    private char[][] playerBoard;
    private char[][] computerBoard;
    private boolean playerTurn;
    private boolean placingShips;
    private int currentShipIndex;
    private boolean horizontal;
    private List<int[]> potentialTargets;

    public BattleshipGame() {
        playerBoard = new char[boardSize][boardSize];
        computerBoard = new char[boardSize][boardSize];
        for (int i = 0; i < boardSize; i++) {
            for (int j = 0; j < boardSize; j++) {
                playerBoard[i][j] = '~';
                computerBoard[i][j] = '~';
            }
        }
        placeComputerShips();
        playerTurn = true;
        placingShips = true;
        currentShipIndex = 0;
        horizontal = true;
        potentialTargets = new ArrayList<>();
    }

    public int getBoardSize() {
        return boardSize;
    }

    public int getCurrentShipIndex() {
        return currentShipIndex;
    }

    public int[] getShips() {
        return ships;
    }

    private boolean checkBuffer(char[][] board, int row, int col, int shipLength, boolean horizontal) {
        int startRow = Math.max(0, row - 1);
        int endRow = Math.min(boardSize - 1, row + (horizontal ? 0 : shipLength - 1) + 1);
        int startCol = Math.max(0, col - 1);
        int endCol = Math.min(boardSize - 1, col + (horizontal ? shipLength - 1 : 0) + 1);

        for (int i = startRow; i <= endRow; i++) {
            for (int j = startCol; j <= endCol; j++) {
                if (board[i][j] != '~') {
                    return false;
                }
            }
        }
        return true;
    }

    private void placeShip(char[][] board, int shipLength) {
        Random rand = new Random();
        boolean placed = false;
        while (!placed) {
            int orientation = rand.nextInt(2);
            int row, col;
            if (orientation == 0) {
                row = rand.nextInt(boardSize);
                col = rand.nextInt(boardSize - shipLength);
                if (checkBuffer(board, row, col, shipLength, true)) {
                    for (int i = 0; i < shipLength; i++) {
                        board[row][col + i] = 'S';
                    }
                    placed = true;
                }
            } else {
                row = rand.nextInt(boardSize - shipLength);
                col = rand.nextInt(boardSize);
                if (checkBuffer(board, row, col, shipLength, false)) {
                    for (int i = 0; i < shipLength; i++) {
                        board[row + i][col] = 'S';
                    }
                    placed = true;
                }
            }
        }
    }

    public boolean allShipsSunk(char[][] board) {
        for (int i = 0; i < boardSize; i++) {
            for (int j = 0; j < boardSize; j++) {
                if (board[i][j] == 'S') {
                    return false;
                }
            }
        }
        return true;
    }

    private void placeComputerShips() {
        for (int shipLength : ships) {
            placeShip(computerBoard, shipLength);
        }
    }

    public boolean placePlayerShip(int row, int col) {
        int shipLength = ships[currentShipIndex];
        boolean validPlacement = true;

        if (horizontal) {
            if (col + shipLength > boardSize || !checkBuffer(playerBoard, row, col, shipLength, true)) {
                validPlacement = false;
            } else {
                for (int i = 0; i < shipLength; i++) {
                    if (playerBoard[row][col + i] != '~') {
                        validPlacement = false;
                        break;
                    }
                }
            }
        } else {
            if (row + shipLength > boardSize || !checkBuffer(playerBoard, row, col, shipLength, false)) {
                validPlacement = false;
            } else {
                for (int i = 0; i < shipLength; i++) {
                    if (playerBoard[row + i][col] != '~') {
                        validPlacement = false;
                        break;
                    }
                }
            }
        }

        if (validPlacement) {
            if (horizontal) {
                for (int i = 0; i < shipLength; i++) {
                    playerBoard[row][col + i] = 'S';
                }
            } else {
                for (int i = 0; i < shipLength; i++) {
                    playerBoard[row + i][col] = 'S';
                }
            }
            currentShipIndex++;
            if (currentShipIndex == ships.length) {
                placingShips = false;
                playerTurn = true;
            }
        }
        return validPlacement;
    }

    public void toggleOrientation() {
        horizontal = !horizontal;
    }

    public boolean isPlacingShips() {
        return placingShips;
    }

    public char[][] getPlayerBoard() {
        return playerBoard;
    }

    public char[][] getComputerBoard() {
        return computerBoard;
    }

    public boolean isPlayerTurn() {
        return playerTurn;
    }

    public void switchTurn() {
        playerTurn = !playerTurn;
    }

    public boolean playerMove(int row, int col) {
        char[][] computerBoard = getComputerBoard();
        if (computerBoard[row][col] == 'S') {
            computerBoard[row][col] = 'H';
            if (allShipsSunk(computerBoard)) {
                endGame(true);
            }
            return true;
        } else if (computerBoard[row][col] == '~') {
            computerBoard[row][col] = 'M';
            switchTurn();
            return false;
        }
        return false;
    }

    public void computerTurn() {
        Random rand = new Random();
        boolean validMove = false;


        while (!potentialTargets.isEmpty()) {
            int[] target = potentialTargets.remove(0);
            int row = target[0];
            int col = target[1];
            if (playerBoard[row][col] == '~') {
                playerBoard[row][col] = 'M';
                validMove = true;
                switchTurn();
                break;
            } else if (playerBoard[row][col] == 'S') {
                playerBoard[row][col] = 'H';
                addPotentialTargets(row, col);
                validMove = true;
                if (allShipsSunk(playerBoard)) {
                    endGame(false);
                }
                break;
            }
        }


        while (!validMove) {
            int row = rand.nextInt(boardSize);
            int col = rand.nextInt(boardSize);
            if (playerBoard[row][col] == '~') {
                playerBoard[row][col] = 'M';
                validMove = true;
                switchTurn();
            } else if (playerBoard[row][col] == 'S') {
                playerBoard[row][col] = 'H';
                addPotentialTargets(row, col);
                validMove = true;
                if (allShipsSunk(playerBoard)) {
                    endGame(false);
                }
            }
        }
    }

    private void addPotentialTargets(int row, int col) {
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        for (int[] dir : directions) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];
            if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize && playerBoard[newRow][newCol] == '~') {
                potentialTargets.add(new int[]{newRow, newCol});
            }
        }
    }

    private void endGame(boolean playerWon) {
        if (playerWon) {
            System.out.println("Player wins!");
        } else {
            System.out.println("Computer wins!");
        }

        playerTurn = false;
        placingShips = false;
    }

    public boolean isShipSunk(char[][] board, int row, int col) {
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        for (int[] dir : directions) {
            int r = row, c = col;
            while (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] == 'H') {
                r += dir[0];
                c += dir[1];
            }
            r -= dir[0];
            c -= dir[1];
            while (r >= 0 && r < boardSize && c >= 0 && c < boardSize && (board[r][c] == 'H' || board[r][c] == 'S')) {
                if (board[r][c] == 'S') {
                    return false;
                }
                r -= dir[0];
                c -= dir[1];
            }
        }
        return true;
    }

    public int getCurrentShipLength() {
        return ships[currentShipIndex];
    }

    public boolean isHorizontal() {
        return horizontal;
    }
}
