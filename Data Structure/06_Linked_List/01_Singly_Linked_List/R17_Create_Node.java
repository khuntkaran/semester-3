import java.util.Scanner;

class New_Node{
    Object value;
    New_Node address;
}
public class R17_Create_Node{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=6;
        New_Node[] NN=new New_Node[n];
        for(int i=0;i<n;i++){
            NN[i]=new New_Node();
            if(i!=0){
                NN[i-1].address=NN[i];
            }
            System.out.print("Enter element : ");
            NN[i].value=sc.next();

            System.out.println("add element(y/n)");
            char temp = sc.next().charAt(0);
            if(temp=='n')
                break;

        }
        New_Node nw= NN[0];
        while(nw!=null){
            Object element = nw.value;
            System.out.println(element);
             nw= nw.address;
        }
    }
}