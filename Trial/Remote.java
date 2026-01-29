Read Percentage And Find Grade 
Percentage>=70 Print Distinction 
Percentage>=60 Print First Class 
Percentage>=50 Print Second Class 
Percentage>=30 Print Pass 
else 
Print Fail 
import java.util.Scanner; 
class Grade 
{ 
static Scanner sc=new Scanner(System.in); 
public static void main(String[] args) throws Exception 
{ 
System.out.print("\t\t\tEnter your Percentage:"); 
double percentage=sc.nextDouble(); 
System.out.println("\t\t\tProcessing...."); 
Thread.sleep(3000); 
if(percentage>100||percentage<0) 
System.out.println("Invalid Percentage"); 
else if(percentage>=70) 
System.out.println("Distinction"); 
else if(percentage>=60) 
System.out.println("First Class"); 
else if(percentage>=50) 
System.out.println("Second Class"); 
else if(percentage>=30) 
System.out.println("Pass"); 
else 
System.out.println("Failed"); 
} 
} 
/* 
Enter your Percentage: 36 
Pass 
Processing..