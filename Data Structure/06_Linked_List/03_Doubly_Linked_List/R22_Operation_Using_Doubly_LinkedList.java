package Doubly_Linked_List;
import java.util.Scanner;

class Avail{
    Avail LPTR;
    Object value;
    Avail RPTR;
}
public class R22_Operation_Using_Doubly_LinkedList {
    int n=6;
    Avail[] NN= new Avail[n];
    Avail First,Last;
    int i=0;
    void insertFront(Object x){
        System.out.println("insertFront");
        if(i>=n){
            System.out.println("Overflow");
            return;
        }
        NN[i]=new Avail();
        Avail newpart=NN[i];
        if(i==0){
            Last=newpart;
            First=newpart;
            i++;
            newpart.value=x;
            return;
        }
        i++;
        newpart.value=x;
        First.LPTR=newpart;
        newpart.RPTR=First;
        First=newpart;
    }

    Object deleteSpecified(Object x){
        if(First==null){
            System.out.print("Empty Linked List ");
            return 0;
        }
        if(First.value.equals(x)){
            Object free = First.value;
            i--;
            if(First.RPTR==null){
                First=null;
                Last=null;
                return free;
            }
            First=First.RPTR;
            First.LPTR=null;
            return free;
        }
        Avail save = First;
        Avail pred = save;
        while ((!save.value.equals(x))&&save.RPTR!=null) {
            pred=save;
            save=save.RPTR;
        }
        if((!save.value.equals(x))){
            System.out.print("Not Fount ");
            return 0;
        }
        i--;
        if(save.RPTR==null){
            pred.RPTR=null;
            Last=pred;
            return save.value;
        }
        pred.RPTR=save.RPTR;
        (save.RPTR).LPTR=pred;
        System.out.println("deleteSpecified");
        
        return save.value;
    }

    void insertEnd(Object x){
        System.out.println("insert end");
        if(i>=n){
            System.out.println("Overflow");
            return;
        }
        NN[i]=new Avail();
        Avail newpart=NN[i];
        if(i==0){
            Last=newpart;
            First=newpart;
            i++;
            newpart.value=x;
            return;
        }
        i++;
        newpart.value=x;
        Last.RPTR=newpart;
        newpart.LPTR=Last;
        Last=newpart;
    }

    void displayNode(){
        System.out.println("displayNode");
        Avail displayNode= First;
        System.out.print("|");
        while(displayNode!=null){
            Object element = displayNode.value;
            System.out.print("["+element+"]->");
            displayNode= displayNode.RPTR;
        }
        System.out.println("|");
        displayNode= Last;
        System.out.print("|");
        while(displayNode!=null){
            Object element = displayNode.value;
            System.out.print("["+element+"]->");
            displayNode= displayNode.LPTR;
        }
        System.out.println("|");
    }

    public static void main(String[] args) {
        R22_Operation_Using_Doubly_LinkedList oud = new R22_Operation_Using_Doubly_LinkedList();
        Scanner sc = new Scanner(System.in);
        boolean flag=true;
        while(flag){
            System.out.print("1 : Insert Front\n2 : Delete Specified Value\n3 : Insert Last\n4 : Display\n5 : Exit\nOperation : ");
            Object k = sc.next();
            switch (k.toString()){
                case "1":
                    System.out.print("Enter Value : ");
                    oud.insertFront(sc.next());
                    break;
                case "2":
                    System.out.print("Enter Value : ");
                    System.out.println(oud.deleteSpecified(sc.next()));
                    break;
                case "3":
                    System.out.print("Enter Value : ");
                    oud.insertEnd(sc.next());
                    break;
                case "4":
                    oud.displayNode();
                    break;
                case "5":
                    flag=false;
                    break;
                default:
                    System.out.println("Envalid Choise");

            }
        }
    }
}
