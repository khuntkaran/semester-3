import java.util.Scanner;

public class TimeCount {
    int hh,mm,ss;
    void countSecond(){
        while (ss>=3600){
            hh++;
            ss=ss-3600;
        }
        while (ss>=60){
            mm++;
            ss=ss-60;
        }
        System.out.println(hh+":"+mm+":"+ss);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        TimeCount t1 = new TimeCount();
        System.out.print("Enter second : ");
        t1.ss = sc.nextInt();
        t1.countSecond();
    }
}