import java.util.Scanner;
class MatrixSet{
    int x,y;
    int m[][];
    Scanner sc = new Scanner(System.in);
    public MatrixSet(){
    
        System.out.print("how many row in matrix = ");
        x=sc.nextInt();
        System.out.print("how many colum in matrix = ");
        y=sc.nextInt();

        m = new int[x][y];

        for(int i = 0;i<x;i++){
            for(int j = 0; j<y ; j++){
                System.out.println("Enter the number["+(i+1)+"]["+(j+1)+"]");
                m[i][j] = sc.nextInt();
            }
        }
    }
}

class MatrixMultiply{
    int c=1;
    MatrixMultiply(MatrixSet m1,MatrixSet m2){
        if(m1.y!=m2.x){
            System.out.println("givent matrix multiplycation is not possible");
        }
        else{
            print(m1);
            print(m2);
            multiply(m1,m2);
        }
    }
    void print(MatrixSet ms){
        System.out.println("-------------------");
        for ( int i = 0; i < ms.x; i++){
            for (int j = 0; j < ms.y; j++){
                System.out.print(ms.m[i][j]+" ");
            }
            System.out.println();
        }
    }
    void multiply(MatrixSet m1,MatrixSet m2){
        System.out.println("<-----Answer----->");
        for (int i = 0; i < m1.x; i++)
        {
            for (int j = 0; j <m2.y; j++)
            {
                c=0;
                for (int k = 0; k < m1.y; k++)
                {
                    c=c + (m1.m[i][k] * m2.m[k][j]);
                }
                System.out.print(c+" ");
            }	
            System.out.println();
        }
    }
}
public class matrix_multiplication {
    public static void main(String[] args) {
        MatrixSet ms = new MatrixSet();
        MatrixSet ms2 = new MatrixSet();
        MatrixMultiply mm = new MatrixMultiply(ms, ms2);
    }
}