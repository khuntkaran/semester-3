import java.util.*;
public class R04_Replace {
    public static void main(String[] args) {
        int[] a;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter array size : ");
        int size = sc.nextInt();
        a = new int[size];

        for(int i=0;i<a.length;i++){
            System.out.print("Enter a["+i+"] : ");
            a[i]=sc.nextInt();
        }

        System.out.print("Enter chang number : ");
        int old = sc.nextInt();
        System.out.print("Enter new number : ");
        int n = sc.nextInt();

        for(int i=0;i<a.length;i++){
            if(a[i]==old){
                a[i]=n;
                System.out.println("index of change value in array : "+i);
            }
        }
        System.out.print("new array is :");
        for(int i : a){System.out.print(" "+i);}
    }
}