public class Rotation{
    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5, 6};
        int n = arr.length;

        int k = 2; 
        int r = 2; 

        
        for (int t = 0; t < r; t++) {
            int last = arr[n - 1];
            for (int i = n - 1; i > k; i--) {
                arr[i] = arr[i - 1];
            }
            arr[k + 1] = last;
        }

       
        System.out.println("Array after rotation:");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
