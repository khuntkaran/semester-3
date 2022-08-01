import java.util.Scanner;
public class R11_AiBi {
    int Top =0;
    char stack[] = new char[20];

    void push(char arg){
        Top++;
        if(Top-1>19){
            System.out.println("stack oveflow");
            return;
        }
        stack[Top-1] = arg;
    }

    void display(){
        System.out.print("[ ");
        for(int i=0;i<Top;i++){
            System.out.print(stack[i]+" ");
        }
        System.out.println("]");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter string : ");
        String input = sc.nextLine();
        R11_AiBi a1 = new R11_AiBi();
        R11_AiBi b1 = new R11_AiBi();


        for (int i =0 ; i<input.length();i++){
            if(input.charAt(i) == 'a'){
                a1.push('a');
            }
            else if(input.charAt(i) == 'b'){
                b1.push('b');
            }
        }

        if(a1.Top==b1.Top){
            System.out.println("valid string");
        }
        else{
            System.out.println("invalid string");
        }

        a1.display();
        b1.display();
        System.out.println("number of a : "+a1.Top+" number of b : "+b1.Top);
    }
}