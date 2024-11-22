package Bean;

public class FactorialBean {
    private int number;

    // Getter for the number
    public int getNumber() {
        return number;
    }

    // Setter for the number
    public void setNumber(int number) {
        this.number = number;
    }

    // Method to calculate the factorial of the number
    public long calculateFactorial() {
        long factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
