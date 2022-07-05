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

