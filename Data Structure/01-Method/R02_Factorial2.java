import java.util.Scanner;
public class R02_Factorial2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        R02_Factorial2 ft = new R02_Factorial2();
        System.out.print("Enter number : ");
        System.out.println("factorial = "+ft.findFactorial(sc.nextInt()));
    }
    public int findFactorial(int n){
       if(n==1||n==0){
        return 1;
       }
        return n * findFactorial(n-1);
    }
}
