package ch01;

public class Operator {
    public static void main(String[] args){
        //????????? + - * /
        int a, b ,c ;
        a=10;
        b=3;
        c=a/b;
        System.out.println(c); //????/??????? ?????? ???��?.
        byte b1;
        int b3;
        b1=10; int b2=20;
        b3=b1+b2; //+���� �� byte���� int �� �ڵ�����ȯ
        //Arithmetic Exception
        System.out.println(b3);

        //���ڿ� ���տ����� +
        System.out.println(1+2+"3");

    }
}
