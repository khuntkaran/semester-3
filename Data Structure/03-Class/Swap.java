import java.util.Scanner;
public class Swap {
    static int a=0,b=0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter a : ");
        a= sc.nextInt();
        System.out.print("enter b : ");
        b=sc.nextInt();

        swapvalue();
    }
    static void swapvalue() {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("a : " + a + " b : " + b);
    }
}