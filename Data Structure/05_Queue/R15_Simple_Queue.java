public class R15_Simple_Queue{
    Object[] Queue = new Object[10];
    public static void main(String[] args) {
        R15_Simple_Queue sq = new R15_Simple_Queue();
       
        sq.Queue[0]=5;
        sq.Queue[1]=6;
        System.out.println(sq.Queue[0]);
        System.out.println(sq.Queue[1]);
    }
}