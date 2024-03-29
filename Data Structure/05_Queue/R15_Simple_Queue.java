import java.util.Scanner;
public class R15_Simple_Queue{
    Object[] Queue = new Object[20];
    int front=-1;
    int rear=-1;
    void insert(Object y){
        if(rear>=19){
            System.out.println("Queue overflow");
            return;
        }
        rear++;
        Queue[rear]=y;
        if(front==-1){
            front=0;
        }
    }
    Object delete(){
        if(front==-1){
            System.out.print("Queue underflow");
            return 00;
        }
        Object y = Queue[front];
        if(front==rear){
            front=-1;
            rear=-1;
        }
        else {
            front++;
        }
        return y;
    }
    void display(){
        if(front==-1){
            System.out.println("empty queue");
            return;
        }
        System.out.print("[");
        for(int i=front;i-1!=rear;i++){
            System.out.print(Queue[i]+",");
        }
        System.out.println("]");
    }
    public static void main(String[] args) {
        R15_Simple_Queue sq = new R15_Simple_Queue();
        Scanner sc = new Scanner(System.in);
      
        boolean flag = true;
        while (flag){
            System.out.print("1 : push element in Queue\n2 : delete element in queue\n3 : display stack\n4 : exit\noperation : ");
            int y = sc.nextInt();
            switch (y){
                case 1 :
                    System.out.print("enter element : ");
                    sq.insert(sc.nextInt());
                    break;
                case 2 :
                    System.out.println("remove first element : "+sq.delete());
                    
                    break;
                case 3 :
                    sq.display();
                    break;
                case 4 :
                    flag = false;
                    break;
                default:
                    System.out.println("your choice invalid");
            }
        }
    }
}