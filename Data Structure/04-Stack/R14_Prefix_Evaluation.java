package stackoperations;
import java.util.Scanner;
public class R14_Prefix_Evaluation{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        R10_OperationsUsingArray kp = new R10_OperationsUsingArray();
        System.out.println("enter string");
        String prefix = sc.next();
        String ninfix="";
        for (int i=prefix.length()-1;i>=0;i--){
          ninfix+=prefix.charAt(i);
        }
       R13_Postfix_Evaluation pe =new R13_Postfix_Evaluation();
       pe.Evaluate(ninfix);
    }
}