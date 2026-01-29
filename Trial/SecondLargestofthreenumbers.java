import java.util.Scanner;
class SecondLargestofthreenumbers 
{
	static Scanner mani = new Scanner(System.in);
	public static void main(String[] args) 
	{
		System.out.print("\t\t\t Enter Any a:");
		int a = mani.nextInt();
		System.out.print("\t\t\t Enter Any b:");
		int b = mani.nextInt();
		System.out.print("\t\t\t Enter Any c:");
		int c = mani.nextInt();
		int d;
		
		if (a>b && a<c || a<b && a>c)
		{
		d = a;
		}
		else if (b>c && b<a || b>a && b<c)
		{
		d = b;
		}
		else
		{
			d = c;
		}
		
		System .out.println("Second Largest Number;"+d);
	}	
			}
