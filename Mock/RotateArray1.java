import java.util.*;

class RotateArray{
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4, 5};
        System.out.print("Enter num:");
        int n = sc.nextInt();
    
        for (int i = 0; i<n; i++) {
            int first = a[0];
            for (int j = 0; j<a.length-1; j++){
              a[j] = a[j+1];
            }
            a[a.length-1] = first;
        }

        System.out.println(Arrays.toString(a));
    }
}
