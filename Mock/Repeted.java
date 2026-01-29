import java.util.Scanner;

public class LargestRepeatedChar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        int[] freq = new int[256]; 

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            freq[ch]++;
        }

        char Char = ' ';
        int Count = 0;

        for (int i = 0; i < 256; i++) {
            if (freq[i] > Count) {
                Count = freq[i];
                Char = (char) i;
            }
        }

        if (Count > 1) {
            System.out.println("Largest Character: " + Char);
            System.out.println("Number of times: " + Count);
        } else {
            System.out.println("No repeated characters");
        }

    }
}
