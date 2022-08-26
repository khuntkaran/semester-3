import java.util.Scanner;

class Avail{
    Object value;
    Avail address;
}
public class R18_OperationUsingSinglyLinkedList{
    int n=6;
    int i=0;
    Object[] Avail = new Object[n];
    Avail First;
    Avail Last;
    
    Avail[] NA=new Avail[n];

    void insertFront(Object x){
        if(i>=n){
            System.out.println("Availability stack underflow");
           return;
        }
        NA[i]= new Avail();
        Avail newpart= NA[i];
        if(i==0){
            Last=newpart;
        }
        i++;
        newpart.value =x;
        newpart.address=First;
        First=newpart;
    }

    void display(){
        Avail displayNode= First;
        while(displayNode!=null){
            Object element = displayNode.value;
            System.out.print("["+element+"]->");
            displayNode= displayNode.address;
        }
        System.out.println();
    }

    Object deleteFront(){
        if(First==null){
            return "underflow";
        }
        Object free = First.value;
        First=First.address;
        return free;
    }

    void insertEnd(Object x){
        if(i>=n){
            System.out.println("Availability stack underflow");
           return;
        }
        NA[i]= new Avail();
        Avail newpart= NA[i];
        newpart.value =x;
        if(i!=0 && First==null){
            First=newpart;
        }
        if(i==0){
            Last=newpart;
            First=newpart;
        }else{
            Last.address=newpart;
        }
        i++;
        Last=newpart;
    }

    Object deleteLast(){
        if(First==null){
            return "underflow";
        }
        Object free = Last.value;
        First=First.address;
        return free;
    }

    public static void main(String[] args) {
        R18_OperationUsingSinglyLinkedList oul= new R18_OperationUsingSinglyLinkedList();
        Scanner sc = new Scanner(System.in);
        boolean flag = true;
        while (flag){
            System.out.print(  "1 : Insert a node at the front of the linked list\n2 : Display all node\n3 : Delete a node at the front of the linked list\n4 : Insert a node at the end of the linked list\n6 : exit\noperation : ");
            int y = sc.nextInt();
            switch (y){
                case 1 :
                    System.out.print("enter element : ");
                    oul.insertFront(sc.next());
                    break;
                case 2 :
                    oul.display();
                    break;
                case 3 :
                    System.out.println( oul.deleteFront());
                    break;
                case 4 :
                    System.out.print("enter element : ");
                    oul.insertEnd(sc.next());
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