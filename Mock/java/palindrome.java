import java.util.*;
public class palindrome{
    public static void main(String args[]){
        String s="hello";
        reverse(s);
        }
		
		public static void reverse(String s){
		String ans="";
        for(int i=s.length()-1;i>=0;i--){
            ans+=s.charAt(i);
        }
        if(ans.equals(s)){
            System.out.println("Palindrome");
        }
 		else{
			 char[] a = new char[s.length() + ans.length()];
		        for (int i = 0; i < s.length(); i++) {
		            a[i] = s.charAt(i);
		        }
			int first = 0;
			int last = s.length()-1;
			while (first<last)
			{
			if(a[first]!=a[last]){
				a[last] = a[first];
			}
			first++;
			last--;
			}
			
		    }
			
			System.out.println("Palindrome");
			
		}
		}  
