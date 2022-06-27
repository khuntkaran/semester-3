import java.util.Scanner;
public class Prime {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n : ");
        checkNumber(sc.nextInt());
    }
    static void checkNumber(int n){
        int flag =0;
        for(int i=2;i<(n/2);i++){
            if(n%i==0){
                flag =1;
                break;
            }
        }
        if(flag==1){
            System.out.println("number is not prime");
        }
        else{
            System.out.println("number is prime");
        }
    }
}
