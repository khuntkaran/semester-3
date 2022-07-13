import java.util.Scanner;

public class R10_OperationsUsingArray {
    int[] stack = new int[10];
    int Top = -1;
    static Scanner sc = new Scanner(System.in);
    void push(int x){
        if(Top>=9){
            System.out.println("stack overflow");
            return;
        }
        Top++;
        stack[Top] = x;
    }
    int pop(){
        if(Top<0){
            System.out.print("stack underflow ");
            return 0;
        }
        Top--;
        return stack[Top+1];
    }
    int peep(int i){
        if(Top-i+1<0){
            System.out.println("stack underflow");
            return 0;
        }
        return stack[Top-i+1];
    }
    void change(int x,int i){
        if(Top-i+1<0){
            System.out.println("stack underflow");
            return;
        }
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
        boolean flag = true;
        while (flag){
            System.out.print("1 : push element in stack\n2 : pop element in stack\n3 : check element in stack\n4 : change element in stack\n5 : display stack\n6 : exit\noperation : ");
            int y = sc.nextInt();
            switch (y){
                case 1 :
                    System.out.print("enter element : ");
                    oua.push(sc.nextInt());
                    break;
                case 2 :
                    System.out.println("remove last element : "+oua.pop());
                    break;
                case 3 :
                    System.out.print("which element check from Top in stack : ");
                    int i = sc.nextInt();
                    System.out.println(i+" element from Top in stack is "+oua.peep(i));
                    break;
                case 4 :
                    System.out.print("which element change from Top in stack : ");
                    int i2 = sc.nextInt();
                    System.out.print("new element is : ");
                    int x = sc.nextInt();
                    oua.change(x,i2);
                    break;
                case 5 :
                    oua.display();
                    break;
                case 6 :
                    flag = false;
                    break;
                default:
                    System.out.println("your choice invalid");
            }
        }
    }
}