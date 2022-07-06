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





## 🤿22.07.06

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



- char 타입 ('' 작은 따옴표)

  문자 리터럴을 int 타입에 저장할 경우

  ```java
  char var1 = 'A'; // A 출력
  int var2 = 'A'; // 65 출력, 유니코드
  char var3 = 44032; // 가 출력
  ```

  

- String 타입

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

 
