import java.util.*;
class Fibonacci 
{
	static Scanner sc = new Scanner(System.in);
		
	public static void main(String[] args) 
	{
		System.out.print("Enter num:");
		int n =sc.nextInt();
		int a = 0;
		int b = 1;
		int d[]=new int[n];
		//System.out.println(a);
		//System.out.println(b);
		
		for (int i=2;i<n ;i++ )
		{
		
		int c = a+b;            //1 ---- 2 ----
		//System.out.println(Arrays.toString(c));
		a=b;                    //a=1 --- 1 ----
		b=c;                    //b=1 --- 2 ----
		
		d[0]=0;
		d[1]=1;
		d[i]=c;}
		System.out.println(Arrays.toString(d));
		
		}
}
