package Precedence;
import java.util.Scanner;

public class R13_ii_Infix_To_Prefix {
    public static void main(String[] args) {
        R12_Infix_To_Postfix ItoP2 = new R12_Infix_To_Postfix();
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter String : ");
        String infix = sc.nextLine();
        String ninfix="";

        for (int i=infix.length();i>0;i--){
            if(infix.charAt(i-1)=='('){ ninfix+=')';}
            else if(infix.charAt(i-1)==')'){ ninfix+='(';}
            else {ninfix+=infix.charAt(i-1);}
        }

        ninfix=ItoP2.checkString(ninfix+')');

        infix="";
        for (int i=ninfix.length();i>0;i--){
                infix+=ninfix.charAt(i-1);
        }
        System.out.println(infix);
    }
}