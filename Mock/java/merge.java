import java.util.*;
public class merge{
    public static void main(String args[]){
        int[]a={1,2,3,4,5};
        char[]b={'a','b','c','d','e'};
        
        ArrayList <Object> result=new ArrayList<>();

        for(int i=0,m=0,n=0;i<a.length;i++){
            result.add(a[m++]);
            result.add(b[n++]);
        }
        System.out.println(result);
    }
}