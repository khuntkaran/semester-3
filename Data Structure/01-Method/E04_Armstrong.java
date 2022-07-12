import java.util.Scanner;

public class E04_Armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter n : ");
        int n = sc.nextInt();
        System.out.print("Armstrong : ");
        for(int i=1;i<=n;i++){
            int c =i,k=0,check=0,temp=1;

            int s= (String.valueOf(i)).length();

            while (c!=0){
                k= c %10;
               check = (int) (check+ Math.pow(k,s));
               c=c/10;
            }
            if(i == check){
                System.out.print(i+" ");
            }
        }
    }
}