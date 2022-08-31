import java.util.Scanner;

class Avail{
    Object value;
    Avail address;
}
public class R21_Operation_Using_Circular_LinkedList {
    Avail First;
    Avail Last;
    int n = 6;
    int i=0;
    Avail NA[] = new Avail[n];

    void insertFront(Object x){
        if(i==n){
            System.out.println("overflow");
            return;
        }
        NA[i]= new Avail();
        Avail newpart= NA[i];
        newpart.value =x;
        if(i==0){
            newpart.address=newpart;
            First=newpart;
            Last=newpart;
        }
        else{
            newpart.address=First;
            First=newpart;
            Last.address=First;
        }
        i++;
    }

    Object deleteSpecified(Object x){
        if(First==null){
            System.out.print("empty");
            return 0;
        }
        Object free;
        if(First.value.equals(x)){
            free=First.value;
            if(First==Last){
                First=null;
                Last=null;
                i=0;
                return free;
            }
            First=First.address;
            i--;
            return free;
        }
        Avail save=First;
        Avail pred=save;
        while((!save.value.equals(x))&&save.address!=Last.address){
            pred=save;
            save=save.address;
        }
        if((!save.value.equals(x))){
            System.out.println("not eqal");
            return 0;
        }
        if(save.address==First){
            pred.address=First;
            Last=First;
            i--;
            return save.value;
        }
        pred.address=save.address;
        i--;
        return save.value;
    }

    void insertEnd(Object x){
        if(i==n){
            System.out.println("overflow");
            return;
        }
        NA[i]= new Avail();
        Avail newpart=NA[i];
        newpart.value=x;
        if(i==0){
            newpart.address=newpart;
            First=newpart;
            Last=newpart;
        }
        else{
            newpart.address=First;
            Last.address=newpart;
            Last=newpart;
        }
        i++;
    }

    void displayNode(){
        Avail Display = First;
        for(int j=0;j<i;j++){
            System.out.print(Display.value+", ");
            Display=Display.address;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        R21_Operation_Using_Circular_LinkedList ouc = new R21_Operation_Using_Circular_LinkedList();
        Scanner sc = new Scanner(System.in);
        boolean flag=true;
        while(flag){
            System.out.print("1 : insert front\n2 : delete specified value\n3 : insert last\n4 : display\n5 : exit\nOperation : ");
            Object k = sc.next();
            switch (k.toString()){
                case "1":
                    System.out.print("enter value : ");
                    ouc.insertFront(sc.next());
                    break;
                case "2":
                    System.out.print("enter value : ");
                    System.out.println(ouc.deleteSpecified(sc.next()));
                    break;
                case "3":
                    System.out.println("enter value : ");
                    ouc.insertEnd(sc.next());
                    break;
                case "4":
                    ouc.displayNode();
                    break;
                case "5":
                    flag=false;
                    break;
                default:
                    System.out.println("envalid");

            }
        }
    }
}
