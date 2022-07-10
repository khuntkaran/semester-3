import java.util.Scanner;
class Employee_Detail{
    int Employee_id,Salary;
    String Name,Designation;
    Scanner sc = new Scanner(System.in);

    public void E_Detail_Get(){
        System.out.print("Enter Employee_id : ");
        Employee_id = sc.nextInt();
        sc.nextLine();
        System.out.print("Enter Name : ");
        Name=sc.nextLine();
        System.out.print("Enter Designation : ");
        Designation=sc.nextLine();
        System.out.print("Enter Salary : ");
        Salary=sc.nextInt();
    }

    public void E_Detail_Print(){
        System.out.println("Employee_id :"+Employee_id);
        System.out.println("Name :"+Name);
        System.out.println("Designation :"+Designation);
        System.out.println("Salary :"+Salary);
    }
}
public class R08_EmployeeDemo {
    public static void main(String[] args) {
        Employee_Detail ED = new Employee_Detail();
        ED.E_Detail_Get();
        ED.E_Detail_Print();
    }
}