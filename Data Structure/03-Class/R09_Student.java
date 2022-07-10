import java.util.Scanner;

class Student_Detail{
    int Enrollment_no,Sem;
    String Name;
    double CPI;
    Scanner sc = new Scanner(System.in);

    public void S_Detail_Get(){
        System.out.print("Enter Enrollment_no : ");
        Enrollment_no = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter Name : ");
        Name=sc.nextLine();
        System.out.print("Enter Sem : ");
        Sem=sc.nextInt();
        System.out.print("Enter CPI : ");
        CPI=sc.nextDouble();
    }

    public void S_Detail_Print(){
        System.out.println("Enrollment_no :"+Enrollment_no);
        System.out.println("Name :"+Name);
        System.out.println("Sem :"+Sem);
        System.out.println("CPI :"+CPI);
    }
}
public class R09_Student {
    public static void main(String[] args) {
        Student_Detail[] SD = new Student_Detail[5];
        for (int i=0;i<5;i++) {
            SD[i]= new Student_Detail();
            SD[i].S_Detail_Get();
            SD[i].S_Detail_Print();
        }
    }
}