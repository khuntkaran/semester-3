package singly_linked_list;
import java.util.Scanner;

class Avail{
    Object value;
    Avail address;
}
public class R18_OperationUsingSinglyLinkedList{
    int n=6;
    int i=0;
    Avail First;
    Avail Last;
    Avail[] NA=new Avail[n];

    void insertFront(Object x){
        if(i>=n){
            System.out.println("Availability Stack Underflow");
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

    Object deleteFront(){
        if(First==null){
            return "Underflow";
        }
        Object free = First.value;
        First=First.address;
        return free;
    }

    void insertEnd(Object x){
        if(i>=n){
            System.out.println("Availability Stack Underflow");
           return;
        }
        NA[i]= new Avail();
        Avail newpart= NA[i];
        newpart.value =x;
        if(i!=0 && First==null){
            First=newpart;
            i++;
            Last=newpart;
            return;
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

    Object deleteEnd(){
        if(First==null){
            return "Underflow";
        }
        Object free = Last.value;
        if(First.address==null){
            First=null;
            Last=null;
            return free;
        }
        Last= First;
        while(Last.address.address!=null){
            Last=Last.address;
        }
            Last.address=null;
        return free;
    }

    Object deleteSpecified(Object x){
        if(First==null){
            System.out.print("Empty Linked List ");
            return 0;
        }
        if(First.value.equals(x)){
            Object free = First.value;
            First=First.address;
            return free;
        }
        Avail save = First;
        Avail pred=save;
        while((!save.value.equals(x)) && save.address!=null){
            pred=save;
            save=save.address;
        }
        if((!save.value.equals(x))){
            System.out.print("Not Fount ");
            return 0;
        }
        if(save.address==null){
            pred.address=null;
            return save.value;
        }
        pred.address=save.address;
        return save.value;
    }

    void display(){
        Avail displayNode= First;
        System.out.print("|");
        while(displayNode!=null){
            Object element = displayNode.value;
            System.out.print("["+element+"]->");
            displayNode= displayNode.address;
        }
        System.out.println("|");
    }

    public static void main(String[] args) {
        R18_OperationUsingSinglyLinkedList oul= new R18_OperationUsingSinglyLinkedList();
        Scanner sc = new Scanner(System.in);
        boolean flag = true;
        while (flag){
            System.out.print(  "1 : Insert a node at the Front of the Linked List\n2 : Delete a node at the Front of the Linked List\n3 : Insert a node at the Lastt of the Linked List\n4 : Delete a node at the Lastt of the Linked List\n5 : Delete a node from Specified Value\n6 : Display all node\n7 : Exit\nOperation : ");
            String y = sc.next();
            switch (y){
                case "1" :
                    System.out.print("Enter Value : ");
                    oul.insertFront(sc.next());
                    break;
                case "2" :
                    System.out.println("Deleted Value : "+ oul.deleteFront());
                    break;
                case "3":
                    System.out.print("Enter Value : ");
                    oul.insertEnd(sc.next());
                    break;
                case "4":
                    System.out.println( oul.deleteEnd());
                    break;
                case "5" :
                    System.out.print("Enter Value : ");
                    System.out.println( oul.deleteSpecified(sc.next()));
                    break;
                case "6" :
                    oul.display();
                    break;
                case "7":
                    flag = false;
                    break;
                default:
                    System.out.println("Your Choice Invalid Chose In --> {1 to 7}");
            }
        }
    }
}