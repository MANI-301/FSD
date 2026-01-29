import java.util.*;
class Reverse 
{
	public static void main(String[] args) 
	{
		String s1 = "hi% #how4 are@";
		char[] input = new char[s1.length()];
		for (int i = 0; i < s1.length(); i++) {
			input[i] = s1.charAt(i); 
		}

		char[] letters = new char[s1.length()];
		int letterCount = 0;
		for (int i = 0; i < input.length; i++) {
			char ch = input[i];
			if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
				letters[letterCount] = ch;
				letterCount++;
			}
		}

		for (int i = 0; i < letterCount / 2; i++) {
			char temp = letters[i];
			letters[i] = letters[letterCount - 1 - i];
			letters[letterCount - 1 - i] = temp;
		}

		int letterIndex = 0;
		for (int i = 0; i < input.length; i++) {
			char ch = input[i];
			if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
				input[i] = letters[letterIndex];
				letterIndex++;
			}
		}

		for (int i = 0; i < input.length; i++) {
			System.out.print(input[i]);
		}
	}
}
