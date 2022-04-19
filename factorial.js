class Factorial 
{
	public static void main(String[] args) 
	{
		int fact=1;
		int no=5;
		for(int i=no;i>=1;i--)
		{
		fact=i*fact;
		}
		System.out.println("factorial of "+no+" is : " +fact);
	}
}
