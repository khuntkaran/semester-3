import java.util.Scanner;

public class R10_OperationsUsingArray {
    int[] stack = new int[10];
    int Top = -1;
    static Scanner sc = new Scanner(System.in);
    void push(){
        Top++;
        if(Top>9){
            Top--;
            System.out.println("stack overflow");
            return;
        }
        System.out.print("enter element : ");
        stack[Top] = sc.nextInt();
    }
    void pop(){
        Top--;
        if(Top<0){
            System.out.println("stack underflow");
            Top++;
        }
    }
    void peep(){
        System.out.print("which element check from Top in stack : ");
        int i = sc.nextInt();
        if(Top-i+1<0){
            System.out.println("stack underflow");
            return;
        }
        System.out.println(i+" element from Top in stack is "+stack[Top-i+1]);
    }
    void change(){
        System.out.print("which element change from Top in stack : ");
        int i = sc.nextInt();
        if(Top-i+1<0){
            System.out.println("stack underflow");
            return;
        }
        System.out.print("new element is : ");
        int x = sc.nextInt();
        stack[Top-i+1] = x;
    }
    void display(){
        System.out.print("[ ");
        for(int i=0;i<=Top;i++){
            System.out.print(stack[i]+" ");
        }
        System.out.println("]");
    }
    public static void main(String[] args) {

        R10_OperationsUsingArray oua = new R10_OperationsUsingArray();
        boolean b = true;
        while (b){
            System.out.println("1 : push element in stack");
            System.out.println("2 : pop element in stack");
            System.out.println("3 : check element in stack");
            System.out.println("4 : change element in stack");
            System.out.println("5 : display stack");
            System.out.println("6 : exit");
            System.out.print("operation : ");
            int y = sc.nextInt();
            switch (y){
                case 1 :
                    oua.push();
                    break;
                case 2 :
                    oua.pop();
                    break;
                case 3 :
                    oua.peep();
                    break;
                case 4 :
                    oua.change();
                    break;
                case 5 :
                    oua.display();
                    break;
                case 6 :
                    b = false;
                    break;
                default:
                    System.out.println("your choice invalid");
            }
        }
    }
}