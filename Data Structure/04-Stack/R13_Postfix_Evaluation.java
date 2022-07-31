package stackoperations;
import java.util.Scanner;
public class R13_Postfix_Evaluation{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        R10_OperationsUsingArray kp = new R10_OperationsUsingArray();
        System.out.println("enter string");
        String postfix = sc.next();
        
        for(int i=0;i<postfix.length();i++){
            char temp = postfix.charAt(i);
            
            try{
                int temp2=Integer.parseInt(String.valueOf(temp)); 
                kp.push(temp2);
            }
            catch(Exception e){
                double operand2 = Double.valueOf(kp.pop().toString()).doubleValue();
                double operand1 = Double.valueOf(kp.pop().toString()).doubleValue();
                double value=0;
                switch(temp){
                    case '+' :
                    value = operand1+ operand2;
                    break;
                    case '-' :
                    value = operand1- operand2;
                    break;
                    case '*' :
                    value = operand1*operand2;
                    break;
                    case '/':
                    value = operand1/ operand2;
                    break;
                    case '^':
                    value = Math.pow(operand1, operand2);
                    break;
                    default :
                    System.out.println("hiii");
                }
                kp.push(value);
               

            }
        }
        System.out.println(kp.pop());
    }
}