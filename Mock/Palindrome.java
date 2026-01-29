public class Palindrome{
    public static void main(String[] args) {
        String[] words = {"level", "hello", "madam",  "racecar"};

        String largest = null;

        for (int i = 0; i < words.length; i++) {
            if (Palindrome(words[i])) {
                if (largest == null || words[i].length() > largest.length()) {
                    largest = words[i];
                }
            }
        }

        if (largest != null) {
            System.out.println("Largest Palindrome: " + largest);
        } else {
            System.out.println("No palindrome");
        }
    }

    public static boolean Palindrome(String str) {
        int left = 0;
        int right = str.length() - 1;

        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
