import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            BattleshipMenu menu = new BattleshipMenu();
            menu.setVisible(true);
        });
    }
}
