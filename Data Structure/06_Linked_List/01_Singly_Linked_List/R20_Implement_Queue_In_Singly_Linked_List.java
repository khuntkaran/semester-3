package singly_linked_list;
import java.util.Scanner;

public class R20_Implement_Queue_In_Singly_Linked_List {
    public static void main(String[] args) {
        R18_OperationUsingSinglyLinkedList iqisll= new R18_OperationUsingSinglyLinkedList();
        Scanner sc = new Scanner(System.in);
        boolean flag = true;
        while (flag){
            System.out.print( "---Implement_Queue_In_Singly_Linked_List---\n1 : Insert a node \n2 : Delete a node \n3 : Display all node\n4 : Exit\nOperation : ");
            String y = sc.next();
            switch (y){
                case "1":
                    System.out.print("Enter Value : ");
                    iqisll.insertEnd(sc.next());
                    break;
                case "2" :
                    System.out.println("Deleted Value : "+ iqisll.deleteFront());
                    break;
                case "3" :
                    iqisll.display();
                    break;
                case "4":
                    flag = false;
                    break;
                default:
                    System.out.println("Your Choice Invalid Chose In --> {1 to 4}");
            }
        }
    }
}
