import java.util.Scanner;
class VowelsorConsonantusingswitch
{
	static Scanner sc = new Scanner(System.in) ;
	public static void main(String[] args) 
	{
		System.out.print("Enter any Aphabets:");
		char letter = sc.next().charAt(0);
		
		switch (letter)
		{
		case 'a','A' :
			{
			System.out.println("It is a Vowel");
			break;
			}
		case 'e','E':
			{
				System.out.println("It is Vowel");
			break;		
			}
	    case 'i','I':
			{
				System.out.println("It is Vowel");
				break;
			}
		case 'o','O':
			{
				System.out.println("It is Vowel");
				break;
			}
		case 'u','U':
			{
				System.out.println("It is Vowel");
				break;
			}
		default :
			{
				System.out.println("It is Consonent");
			}
		}
	}
}
