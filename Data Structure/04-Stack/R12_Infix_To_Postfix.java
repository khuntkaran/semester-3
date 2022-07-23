import java.util.Scanner;

public class R12_Infix_To_Postfix {
    int inputPrecedence,stackPrecedence,r;

    char[] stack = new char[10];
    int top = 0,rank=0;
    String polish= "";

    public void setPrecedence(char input,char stack){
        switch (input) {
            case '+', '-' -> inputPrecedence = 1;
            case '*', '/' -> inputPrecedence = 3;
            case '^' -> inputPrecedence = 6;
            case '(' -> inputPrecedence = 9;
            case ')' -> inputPrecedence = 0;
            default -> inputPrecedence = 7;
        }
        switch (stack) {
            case '+', '-' -> {stackPrecedence = 2;r = -1;}
            case '*', '/' -> {stackPrecedence = 4;r = -1;}
            case '^' -> {stackPrecedence = 5;r = -1;}
            case '(' -> {stackPrecedence = 0;r = -1;}
            case ')' -> {stackPrecedence = -1;r = -1;}
            default -> {stackPrecedence = 8;r = 1;}
        }
    }

    public String  checkString(String infix){
        stack[top]='(';

        for(int i=0;i<infix.length();i++){
            char IP = infix.charAt(i);
            char SP = stack[top];
            setPrecedence(IP,SP);

            if(top<0){
                System.out.println("Envalid String");
            }

            while (stackPrecedence>inputPrecedence){
                char temp=stack[top];
                polish+=(temp);
                top--;
                rank= rank+ r;
                if(rank<1){return("Envalid String");}
                SP = stack[top];
                setPrecedence(IP,SP);
            }

            if(stackPrecedence!=inputPrecedence){
                top++;
                stack[top]=IP;
            }
            else {
                top--;
            }
        }

        if((top != -1) || (rank!=1)) {return ("Envalid String");}
        return (polish);
    }

    public static void main(String[] args) {
        R12_Infix_To_Postfix ItoP = new R12_Infix_To_Postfix();
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter String : ");
        String infix = sc.nextLine();
        System.out.println(ItoP.checkString(infix+')'));
    }
}