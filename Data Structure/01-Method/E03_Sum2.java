import java.util.Scanner;

public class E03_Sum2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter n number : ");
        int n=sc.nextInt();
        int temp=0;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                temp+=j;
            }
        }
        System.out.println("sum : "+temp);
    }
}