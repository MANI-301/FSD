import java.util.*;
public class intmerge{
    public static void main(String args[]){
        int[]a={1,2,3,4,5};
        int[]b={6,7,8,9,10};
        ArrayList <Integer> result=new ArrayList<>();
        for(int i=0;i<a.length;i++){
            result.add(a[i]);
            result.add(b[i]);
        }
        System.out.println(result);
    }
}