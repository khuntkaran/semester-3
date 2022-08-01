import java.util.*;
public class R16_Circular_Queue {
    Object[] Queue = new Object[6];
    int front=-1;
    int rear=-1;
    int reset =0;
    void insert(Object y){
        if(rear==5){
            int temp=rear;
            rear=0;
           if(front!=0){
                rear=-1;
           }
           else{
            rear=temp;
            System.out.println("queue overflow");
            return;
           }
           reset=1;
        } 
        
        rear++;
        if(front==rear){
            System.out.println("queue overflow");
            return;
        }
        Queue[rear]=y;
        if(front==-1){
            front=0;
            System.out.println("hii");
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
            System.out.println("iam -1");
            reset=-1;
        }
        if(front==5){
            front=0;
        }
        else {
            front++;
        }
        return y;
    }
    void display(){
        if(front==-1){
            System.out.println(front+"empty queue");
            return;
        }
        System.out.print("[");
        for(int i=front;i!=rear;i++){
            System.out.print(Queue[i]+",");
            if(i==5&& front!=0){
                i=-1;
            }
        }
        System.out.println("]");
    }
    public static void main(String[] args) {
        R16_Circular_Queue cq = new R16_Circular_Queue();
        Scanner sc = new Scanner(System.in);
      
        boolean flag = true;
        while (flag){
            System.out.print("1 : push element in Queue\n2 : delete element in queue\n3 : display stack\n4 : exit\noperation : ");
            int y = sc.nextInt();
            switch (y){
                case 1 :
                    System.out.print("enter element : ");
                    cq.insert(sc.nextInt());
                    break;
                case 2 :
                    System.out.println("remove first element : "+cq.delete());
                    
                    break;
                case 3 :
                    cq.display();
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
