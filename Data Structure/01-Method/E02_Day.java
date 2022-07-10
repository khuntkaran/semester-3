import java.util.Scanner;

public class E02_Day {
    static int day,week,year;  //use static keyword
    static void countDay(){
        day = day + week*7;
        week=0;
        while(day>=365){
            year++;
            day=day-365;
        }
        while(day>=7){
            week++;
            day=day-7;
        }
        System.out.println(year+" year, "+week+" week and "+day+" day");
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Days : ");
        day = sc.nextInt();
        countDay();
        System.out.println("Enter Days : ");
        day = day+ sc.nextInt();
        countDay();
        System.out.println("Enter Days : ");
        day = day+ sc.nextInt();
        countDay();
    }
}