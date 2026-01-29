import java.util.Scanner;
class Shan
// odd or even
{
	static Scanner sc= new Scanner (System.in);
	public static void main(String[] args) throws Exception 
	{
		System.out.print("Enter a");
		int a =sc.nextInt();
		System.out.println(a);
		
		//String b =
			//(a==0)? "zero":
				String  b= (a%2==0) ? "even":"odd";
		System.out.println(b);
		/*// possitive or negative
		String c= a==0? "zero": 0<a? "possitive" : "negative ";
		System.out.println(c);
		//if class odd  or even 
		if (a%2==0)
		{System.out.println(a+"even");
		}
		else
		{System.out.println(a+"odd");
		}
		//possitive or negative fot if 
		if (a>0)
		{System.out.println("possitive");
		}
		else
		{
			System.out.println("negative");
		}
		System.out.print("enter d:");
		int d=sc.nextInt();
		Thread .sleep(2000);
		System.out.print("enter e:" );
		int e=sc.nextInt();// ab ac bc 
		String f=(a>d)? (a>e)? "a larger":"" : (d>e)? "d larger" : "e larger";
		System.out.println(f);
		*/
	}
}
