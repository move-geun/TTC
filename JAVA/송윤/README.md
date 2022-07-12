##  JAVA



## 🔥 22.07.05

### 1. 시작하기 전에...

자바 프로그램을 개발하기 위해선 .java인 텍스트 파일을 생성 한 후 Java 언어로 코드를 작성해야 한다. 

`Hello.java` (자바소스파일)→ javac 명령어 실행 (컴파일) → `Hello.class`(바이트 코드 파일) 

→ 기계어 → 실행 



### 2. 프로젝트 생성, 실행

#### (1) 프로젝트 생성

1. File - New - Java Project

2. module-info 생성

   ```java
   module chap01 {
   	requires java.se;
   }
   ```

#### (2)  소스 파일 생성과 작성 

*소스파일 : 프로그래밍 언어로 작성된 파일. (.java 파일)*
*바이트 코드 파일: 자바 소스 파일을 javac 명령어로 컴파일한 파일*

1. src 폴더 우클릭 - New - Package - Name 설정

   ✔ 패키지란?

   ```
   소스 파일 및 컴파일된 바이트 코드 파일들을 기능별로 쉽게 관리하기 위해 Package를 사용한다.
   ```

2. Package 우클릭 - New - Class
   Public static void main 체크

#### (3) Run

### 3. 명령 라인에서 컴파일

cd로 module 있는 폴더로 이동

`javac -d [바이트 코드 파일 위치] [소스경로/module-info.java 소스경로/*.java]`
`javac -d bin src/module-info.java src/sec03/exam01/*java`

`tree /f /a` (바이트 코드 파일 생성 확인)

`java -p bin -m chap01/sec03.exam01.Hello`



### 4. 실습 

```java
package sec03.exam02;

public class RunStatementExample {

	public static void main(String[] args) {
		int x = 1;
		int y = 2; 
		int result = x + y;
		System.out.println(result);
	}
}
```





## 🤿22.07.06 ~ 22.07.10

### 1. 변수

- ##### Java 에서 명명한 규칙

  1. 첫번째 글자는 문자, $, _ 이어야 하고 숫자로 시작할 수 없다. 
     `price, $price, _price`

  2. 합성어의 경위 뒷문자는 대문자로 시작
     `firstName, maxSpeed`

- ##### 변수 사용 범위

  모든 변수는 중괄호 블록 내에서 선언되고 사용되며, 이 안에서 선언된 변수를 **로컬 변수** 라고 한다.
  로컬 변수는 메소드 블록 내에서만 사용이 가능하다. 

  ```java
  public static void main(String[] args) {
      int var1;
      if(...) {
          // var1, var2 사용 가능
          int var2;
      }
  
      for(...) {
          int var3;
          // var2 사용 불가
  	}
  }
  ```

  ※ 주의사항

  - 변수가 어떤 범위에서 사용될 것인지 생각 후 위치 결정
  - 메소드 블록 전체에서 사용하고 싶다면 블록 첫머리에 선언
  - 특정 블록 내부에서만 사용된다면 해당 블록 내에 선언



#### (1) 기본 타입 

| 저장된 값에 따른 분류 | 타입의 종류                  |
| --------------------- | ---------------------------- |
| 정수                  | byte, char, short, int, long |
| 실수                  | float, double                |
| 논리                  | boolean                      |

- 실습

  ```java
  int var1 = 0b1011; // 11, 이진수 자동 변환
  
  long var2 = 1000000000L; // 허용범위 초과시 l, L로 표시해야 함
  ```



- char 타입 (' '작은 따옴표)

  문자 리터럴을 int 타입에 저장할 경우

  ```java
  char var1 = 'A'; // A 출력
  int var2 = 'A'; // 65 출력, 유니코드
  char var3 = 44032; // 가 출력
  ```

  

- String 타입 (" " 큰 따옴표)

  ```java
  String var1 = "A";
  String var2 = "홍길동";
  ```

  - escape 문자 

    ```java
    String str = "번호\t이름\t나이";
    
    tap 적용
    >>> 번호	이름	나이
    ```

    

- 실수 타입 

  ➕ 실수 리터럴

  ```
  5e2 // 500.0
  0,12E-2 // 0.0012
  ```

  - float

    32bit, 7자리 
    **실수 리터럴을  double 타입으로 해석하기 때문에 끝에 f, F를 추가 해야 한다.**

    - `float var = 3.14F`

  - double

    64bit, 15자리
    특별한 이유가 없는 한 실수 리터러를 사용할 떈 double 타입을 사용한다.

 

#### (2) 타입 변환

: Java의 경우 자동 타입 변환이 가능하며, 허용 범위가 작은 타입이 허용 범위가 큰 타입으로 저장될 때 발생
 `byte < short < int < long < float < double`

```JAVA
byte a = 10;
int b = a;

// byte 타입의 a를 b에 int로 복사해서 변환할 수 있다.  
```



##### - 자동 타입 변환

: 작은 허용 범위 타입을 큰 허용 범위 타입으로 저장하는 것

- 자동 타입 변환의 예

  ```java
  // 정수 타입 => 실수 타입
  long longValue = 5000000000L;
  float floatValue = longValue; // 5.0E9f
  double doubleValue = longValue; // 5.0E9
  
  // char => int (유니코드 값이 저장)
  char charValue = 'A';
  int intValue = charValue; // 65가 저장
  
  // byte => char (X)
  byte의 허용범위가 더 넓기 때문에 컴파일 에러 발생
  ```



##### - 강제 타입 변환 (Casting)

: 큰 허용 범위 타입을 작은 허용 범위 타입으로 강제로 나눠서 저장하는 것
 () 괄호 연산자를 사용

`작은 허용 범위 타입 = (작은 허용 범위 타입) 큰 허용 범위 타입`



- 강제 타입 변환의 예

  ```java
  // int => char
  int intValue = 65;
  char charValue = (char) intValue; // "A"가 출력
  
  // double => int
  double doubleValue = 3.14;
  int intValue = (int) doubleValue; // 3 출력, 소수점 이하 버려짐
  ```

  

##### - 정수 연산에서의 자동 타입 변환

: int 타입보다 작은 **byte, short 타입의 변수는 int 타입으로 자동 타입 변환**되어 연산을 수행한다. 

```java
byte x = 10;
byte y = 20;
byte result = x + y // 컴파일 에러 
int result = x + y // byte x, y는 int로 자동 타입 변환되어 result에 저장 된다. 
    
    
// byte + int + long => long
byte v1 = 10;
int v2 = 20;
long v3 = 1000L;
long result = v1 + v2 + v3;
```



##### - 실수 연산에서의 자동 타입 변환

```java
double result = 1.2f (float) + 3.4 (double);  // 1.2f => 1.2 (double) 로 자동변환 되어 연산 된다. 

// int 타입으로 연산을 해야 하는 경우 
int intValue = 10;
double doubleValue = 5.5;
int result = intValue + (int) doubleValue; // int로 강제 변환


// int를 double로 변환해야 하는 경우 
int x = 1;
int y = 2;
double result = x / y; // 결과는 0.5가 아니라 0, 피연산자 모두 int 타입이기 때문에 

=> 세 가지 방법이 존재, 둘중 하나 혹은 모두 double 타입으로 변환 후 연산 
double result = (double) x / y;
double result = x / (double) y;
double result = (double) x / (double) y;

double result = (double) (x/y) // 0.0이 출력, (x/y)가 먼저 연산 되기 때문
```



##### - + 연산에서의 문자열 자동 타입 변환 

``` java
int value = 1 + 2 + "3" => 3 + "3" => 33
String str = 1 + "2" + 3 => "12" + 3 => "123"
```



##### - 문자열과 기본 타입 강제 타입 변환

```java
// 문자열을 기본 타입 
// String => int 
String str = "10";
int value = Integer.parseInt(str);

short, long, float 등 도 마찬가지
    
    
// 기본타입(byte, short char 등)을 문자열로 
int val = 10;
String str = String.value0f(val);
```



#### (3) 변수와 시스템 입출력

| 메소드                          | 의미                                               |
| ------------------------------- | -------------------------------------------------- |
| println(내용);                  | 괄호 안의 내용을 출력하고 행바꿈                   |
| print(내용);                    | 괄호 안의 내용을 출력만 하라                       |
| printf("형식문자열", 값1, 값2); | 괄호 안의 첫 번째 문자열 형식대로 내용을 출력해라. |

```java
System.out.println(리터럴 또는 변수); // 시스템이 가지고 있는 출력장치로 괄호 안의 내용을 출력하고 행을 바꿔라
System.out.printf("이름: %s", "감자바");

// 형식 문자열에 포함될 값이 2개 이상
printf("이름: %1$s, 나이 : %2$d", "김자바", 25);
```



##### - 변수값 출력하기 

- 정수 

  ```java
  %d // 123
  %6d // ___123, 6자리 정수, 왼쪽 빈 자리 공백
  %-6d //123___
  %06d //000123
  ```

- 실수

  ```java
  %10.2f // __123.45 소수점 이상 7자리, 소수점 이하 2자리, 왼쪽 빈 자리 공백
  %-10.2f // 123.45___
  %010.2f // 0000123.45
  ```





##### - 키보드에서 입력된 내용을 변수에 저장하기

: 키보드에서 키 하나를 입력하면 프로그램에서는 숫자로 된 키코드를 읽을 수 있다. 

-  System.in.read()

```java
int keyCode = System.in.read(); // a는 keycode 97 

in 쓰려면 main() 메소드 끝에 throws Exception 을 붙여야 한다. 
```

- Scanner

  : Scanner scanner 는 Scanner 타입의 변수 scanner를 선언한다. 

```java
Scanner scanner = new Scanner(System.in); // Scanner를 생성하는 코드 
inputData = scanner.nextLine(); // 키보드에서 읽고 싶을 때 scanner.nextLine 메소드를 실행한다. 
```



- 문자열 비교

```java
boolean result = inputData.equals("비교문자열");
```







### 2. 연산자

#### (1) 연산자와 연산식

- 연산자의 종류

![img](https://images.velog.io/images/falling_star3/post/9eedce7f-457d-4653-93d1-0960dc09395f/%EC%BA%A1%EC%B2%98.png)





- 연산자의 우선순위
  단항연산자(++, --, ~, !), 부호 연산자(+, -), 대입 연산자(=, +=, -=, ...)는 오른쪽에서 왼쪽

  ```
  a = b = c = 5 
  ```

  1. 단항, 이항, 삼항 연산자 순으로 우선순위를 가진다. 
  2. 산술, 비교, 논리, 대입 연산자 순으로 우선순위를 가진다. 
  3. 단항, 부호, 대입 연산자를 제외한 모든 연산의 방향은 왼쪽에서 오른쪽.



#### (2) 연산자의 종류 

##### - 단항 연산자

- 부호 연산자 

  부호 연산의 결과는 int 타입

  ```java
  byte b = 100;
  byte result = -b; // 컴파일 에러 발생
  int result = -b; // int에 저장해야 함
  ```

-  증감 연산자(++, --)

  연산자의 위치에 따라 결과가 달라짐

  ```java
  int x = 1;
  int y = 1;
  int result1 = ++x + 10; // 12가 저장됨.
  int result2 = y++ + 10; // 11이 저장됨. 1+10 이 수행되고, 그 후에 y+1이 되어 y=2. 
  ```

- 논리 부정 연산자(!)

  true → false, false → true

   	 

##### - 이항 연산자

- 산술 연산자

  1. 피연산자들이 byte, short, char 일 경우 int로 변환후 연산 수행

     ```
     byte + byte → int + int = int
     ```

  2. 피연산자들이 모두 정수 타입이고, long 타입이 포함되어 있는 경우 모두 long으로 변환 후 연산 수행

     ```
     int + long → long + long = long
     ```

  3. 피연산자 중 실수 타입(float, double)이 있을 경우, 허용 범위가 큰 실수 타입으로 변환된 후 연산 수행

     ```
     int + double → double + double = double
     ```

  ❗ 주의

  ```java
  // 1.
  byte byte1 = 1;
  byte byte2 = 2;
  byte byte3 = byte1 + byte2; // 잘못된 코딩
  
  => byte1과 byte2가 int타입으로 변환되어 연산을 수행하기 때문에 다음과 같이 작성 
  int result3 = byte1 + byte2; 
  
  
  // 2.
  int int1 = 10;
  int int2 = 4;
  int result2 = int1 / int2; // 결과는 2
  double result3 = int1 / int2; // 결과는 2.0
  
  => 2.5로 저장하고 싶다면 다음과 같이 작성
  double result3 = (double) int1 / int2;
  ```

  

  - char 타입의 산술 연산

    ```java
    char c1 = 'A' + 1; // c1 = 66으로 컴파일 됨
    char c2 = 'A';
    char c3 = c2 + 1; // 에러, c2는 int로 변환되어 결과는 int로 변환 되는데 char에 저장했기 때문.
    char c3 = (char) (c2 + 1) // B 출력
    ```

    

- 문자열 결합 연산자 (+)

  ```java
  "JDK" + 3 + 3.0 // JDK33.0
  3+ 3.0 + "JDK" // 6.0JDK
  ```

  

- 비교 연산자 (<, <=, >, >=, ==, !=)

  :  두 연산자를 비교 후 true, false를 반환

  ```java
  ('A' < 'B') => (65 < 66) // char타입은 유니코드를 비교
  ```

  [예외]

  ```java
  0.1 == 0.1f // false, 부동 소수점 방식이 0.1을 정확히 표현 불가
      
  => 둘 다 float으로 변환하거나 정수 타입으로 변환 후 비교 해야 함.
  ```

  

  - 문자열 비교 (a.equals(b))

    ```java
    String var1 = "가나다";
    String var2 = "가나다";
    System.out.pringln(var1.equals(var2)) // true
    ```

- 논리 연산자(&&, &, |, ||, ^, !)
  - &&, || 과 &, |의 차이 
    `false && true` 인 경우 false가 앞에 있으므로 바로 false 반환, &의 경우 두 피연산자 모두를 평가해서 결과 반환 



- 대입 연산자(=, += 등)

  : 오른쪽 피연산자의 값을 왼쪽 피연산자인 변수에 저장



- 삼항 연산자

  (조건식) ? (값 또는 연산식) : (값 또는 연산식)

  ```java
  int score = 95;
  char grade = (score > 90) ? 'A' : 'B'; // 조건식이 true면 왼쪽, false면 오른쪽 반환
  ```

   



### 3. 조건문과 반복문

#### (1) 조건문: if문, switch문

#####  - if문

: if문은 true, false 이냐에 따라, switch문은 변수의 값에 따라

```java
// 예시
int score = 93;

if(score>=90) {
	System.out.println("점수가 90보다 큽니다.");
    System.out.pringln("A등급");
} else if(score>=80) {
    System.out.println("점수가 80~89입니다 .")
}
```



✔ Math.random 사용
: Math.random은 0.0 ~ 1.0 까지 double 타입 난수 하나를 리턴

```java
// 1~6 까지 난수 하나를 리턴하자
(int) (Math.random()*6) + 1;
```



##### - switch문

: 변수가 어떤 값을 갖느냐에 따라 실행문이 선택됨.

```java
int time = 9;

switch(time) {
    case 8:
        System.out.println("출근");
        break;
    case 9:
        System.out.println("회의");
        break;
    default:
        System.out.println("외근"); // default는 생략 가능
        break;
        
}
```



#### (2) 반복문: for문, while문, do-while문

##### - for문

- for문으로 1~100 까지 합을 구한는 코드

  ```java
  for (int i=0, j=100; i<=50 && j>=50; i++, j--) {
      sum += i + j
  }
  
  
  // i를 for문 전에 선언하면 for문을 벗어나서 사용 가능하다.
  int sum = 0;
  
  int  i = 0;
  for(i=1; i<=100; i++) {
      sum += i;
  }
  System.out.println("1~" + (i-1) + "합 : " + sum );
  ```

  



##### - while문

: 조건식이 true일 경우에만 반복

```java
int sum = 0;

int i = 1;

while(i<=100) {
	sum+=i;
	i++;
}
```



##### - do-while문

: 블록 내부의 실행문을 우선 실행하고 실행 결과에 따라 반복 실행 할지 말지 결정

```java
do {
    실행문;
} while (조건식);

// 실행문을 실행하고, 조건식을 확인 후 true이면 do 내부 실행문 반복
```



##### - break문

바깥쪽 반복문 종료 시키는 법 (라벨)

```java
Outter: for(...) {
    for(...){
        실행문
    	if(lower=='g'){
        	break Outter;
   		}
    }
}
```



##### - continue문

: for, while, do-while문 에서만 사용되며 continue문이 실행되면 반복문의 조건식으로 이동



## 🌭22.07.12

#### 4. 참조 타입

#### (1) 참조 타입과 참조 변수

자바는 크게 기본 타입 (정수, 실수, 논리)과 참조 타입으로 나뉜다.

- 참조 타입
  : 객체의 번지를 참조하는 타입으로 배열, 열거, 클래스, 인터페이스를 말한다.
  실수, 정수 등은 실제 값이 저장 되지만 참조타입은 **번지**를 통해 객체를 참조한다.

❔ **메모리 사용 영역** **(Runtime Data Area)**

![JVM Run-Time Data Area 구조](https://tecoble.techcourse.co.kr/static/a0b18cc999920474a1852901e1e46ebf/6f641/2021-08-09-jvm-runtime-data-area-structure.png)

- Method Area

  : JVM이 시작할 때 생성되고 모든 스레드가 공유되는 영역

- Heap Area

  : 객체와 배열이 생성되는 영역
    생성된 객체와 배열은 JVM의 변수나 다른 객체의 필드를 참조한다.
    만일 참조하는 변수나 필드가 없다면 의미 없는 객체가 되기 때문에 JVM이 쓰레기로 취급하고 Garbage Collector를 실행시켜 자동      으로 제거.

  

- JVM 스택 영역

  : 메소드를 호출할 때 마다 프레임을 추가(push)하고 메소드가 종료되면 해당 프레임을 제거(pop) 하는 동작을 수행.



##### - null과 nullPointerException

: 참조 타입 변수가 힙 영역의 객체를 참조하지 않는다는 뜻으로 null 값을 가질 수 있다. 
  즉 값을 가지는 참조 타입 변수는 힙 영역에 생성 되고,  null로 초기화된 참조 변수는 스택 영역에 생성 된다.

- NullPointerException 예시 

  ```java
  (1)
  int[] intArray = null; // 배열 변수이므로 참조 변수이다.
  intArray[0] = 10; // null 이기 때문에 이 변수가 참조하는 배열 객체가 없기 때문에 예외(Null Point Exception) 발생
  
  
  String str = null; // String클래스 이므로 참조 타입
  System.out.println("총 문자수 : " + str.length()); // str변수가 참조하는 String 객체가 없으므로 예외 발생
  ```



##### - String

- 변수와 문자열

```java
String name;
name = "신용권";
String hobby = "자바";
    
// 변수(name, hobby)는 스택 영역에 생성되고, 문자열(신용권, 자바)은 각각 String객체로 생성,
// 스택 영역의 변수가, 힙 영역의 String 객체를 참조한다.
```

- 객체 생성 연산자 (new)
  : 직접 string 객체를 생성

```java
// 두 변수는 다른 객체를 참조함
String name1 = new String("신용권");
String name2 = new String("신용권");

boolean result1 = name1.equals(name2); // true, 동일한 문자열인지 비교
name1 == name2; // false, 같은 객체를 참조하는지 비교
```



- Garbage Collector
  : 다음 코드 처럼 참조를 잃은 String객체의 경우 Garbage Collector를 구동시켜 메모리에서 자동 제거 

```
String hobby = "여행";
hobby = null;
```

