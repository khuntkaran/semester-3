import java.util.Scanner;
public class R11_AiBi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter string : ");
        String input = sc.nextLine();
        int a=0,b=0;
        for (int i =0 ; i<input.length();i++){
            if(input.charAt(i) == 'a'){
                a++;
            }
            else if(input.charAt(i) == 'b'){
                b++;
            }
            else{
                System.out.println("invalid string");
                return;
            }
        }
        if(a==b){
            System.out.println("valid string");
        }
        else{
            System.out.println("invalid string");
        }
    }
}