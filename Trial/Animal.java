class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat();   
        Dog d = (Dog) a;        
        System.out.println("Done");
    }
}

