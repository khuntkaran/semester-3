import java.util.Scanner;
public class R01_Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        R01_Factorial ft = new R01_Factorial();
        System.out.print("Enter number : ");
        ft.findFactorial(sc.nextInt());
    }
    public void findFactorial(int n){
        int fact = 1;
        for(int i = n;i>0;i--)
        {
            fact =fact*i;
        }
        System.out.println("factorial = "+fact);
        return;
    }
}
