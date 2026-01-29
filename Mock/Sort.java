public class Sort{
    public static void main(String[] args) {
        String[] arr = {"banana", "apple", "grape", "cherry", "mango"};

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (compare(arr[j], arr[j + 1]) > 0) {
                    String temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
		
        System.out.println("Sorted String Array:");
        for (String s : arr) {
            System.out.println(s);
        }
    }

    public static int compare(String s1, String s2) {
        int len1 = s1.length();
        int len2 = s2.length();
        int minLen = (len1 < len2) ? len1 : len2;

        for (int i = 0; i < minLen; i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                return s1.charAt(i) - s2.charAt(i);
            }
        }
        return len1 - len2;
    }
}
