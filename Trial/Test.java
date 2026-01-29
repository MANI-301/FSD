class Test 
{
	public static void main ( String [] args)
	{
		int a =10, b=30, c=40;
		int res = ++a + ++b;
		System.out.println(++a + a++);
		System.out.println(++b + b++);
		System.out.println(++res + res++);
	}		
}