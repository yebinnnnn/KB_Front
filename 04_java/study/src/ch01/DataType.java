package ch01;

public class DataType { //Ŭ���� �̸��� �ݵ�� ���ϸ�� ���ƾ��Ѵ�.
    public static void main(String[] args){
        //������ ũ��
        byte b; //1byte
        short s; //2byte
        int i; //4byte
        long l;//8byte
        l=123456789012345L; //�빮�� L ǥ�� ����
        //�Ǽ��� Ʈ��
        float f; //4byte
        f= 12.3F; //double Ÿ���� ���� float ���� �޸𸮿� ���ԺҰ�
        double d; //8byte
        //���� ������
        char c; //2byte
        //����(0�� 1�� �ƴ϶� true false)
        boolean bo; //1byte
        //ū �ڷ������� ����ȯ ����
        //�ڵ�����ȯ : �����ڷ��� -> ū�ڷ���
        //��������ȯ : ĳ��Ʈ ������ ���
        b=1;
        i=b; //�ڵ�����ȯ
        f=i; //�� ū������ ���� �ڵ�����ȯ
        System.out.println(b);
        System.out.println(i);
        b=(byte)f; //ĳ��Ʈ�� ���� ����ȯ
        System.out.println(b);
    }
}
