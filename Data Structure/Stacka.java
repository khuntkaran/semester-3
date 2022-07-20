public class Stacka{
    public static void main(String[] args) {
        Object[] ob = new Object[5];
        
        for(int i=0;i<5;i++){
            ob[i]= new Object();
            ob[i] = i;
            System.out.print(ob[i]);
        }
        
    }
}