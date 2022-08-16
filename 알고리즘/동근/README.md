##  알고리즘

22.08.06 토스 자바 스크립트 코테



* 백준 자바스크립트 input value 받는 법

  * 자바스크립트는 파이썬과 다르게 input을 한 줄 씩 읽는 게 아니라 파일 전체를 한번에 읽어 들인다.

    백준에서 input 파일의 위치는 `/dev/stdin`이다.

    ```
    26 24
    30 15
    35 22 
    15 48
    ```

    ```javascript
    var fs = require('fs');  // 파일 읽기 위한 fs를 불러오고
    var input = fs.readFileSync("/dev/stdin").toString().split("\n");  // 한 줄씩 받아오겠다.
    // [ '26 24\r', '30 15\r', '35 22 \r', '15 48' ]
    ```

    ```javascript
    for(let i=0; i <= input.length-1; i++){
        const [a,b] = input[i].splie(' ').map(Number);
    }
    // 위의 방식으로 나눠서 써먹는다~!
    ```

  
  
  
  
  
  * JS map과 foreach의 차이점
  
    * `Array.prototype.forEach`
  
      ```javascript
      const nums = [1,2,3];
      const duble = [];
      nums.forEach(x=>duble.push(x*2));
      console.log(nums);			// [2, 4, 6]
      ```
  
      `forEach`의 경우 자기 내부의 값들을 받아 반복문을 실행한다.
  
      `forEach`는 원본 배열을 변경하지 않고 반환값은 언제나 `undefined`다
  
    * `Array.prototype.map`
  
      ```javascript
      const nums = [1,2,3];
      const duble = nums.map(x=>x*2);
      console.log(duble) 			// [2, 4, 6];
      ```
  
      `map`의 경우도 forEach와 같이 자기 내부의 값들로 반복문을 실행한다.
  
      이 때, 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다!
  
      이 두가지의 코드를 비교해보면 forEach의 경우 `[]`를 생성하여 `push` 하여 새로운 배열을 만들었지만
  
      `map`의 경우는 다르다. 
  
  
  
  * `Set` 사용하여 중복 없애기
  
    ```javascript
    const nums = [1,1,1,1,2];
    const num = new Set(nums);
    console.log(num) 			// Set(2) {1, 2}
    // 이 때 Set의 길이를 알려면 .size를 통해 확인한다.
    console.log(num.size)		// 2
    ```
  



* length 와 size

  * Array.length 

  * 배열의 길이를 반환한다

    ```javascript
    let arr = [a,b,c,d];
    console.log(arr.length);
    // 4
    ```

  * String.length

  * 문자열의 길이를 반환한다

    ```javascript
    let str = 'earth';
    console.log(str.length);
    // 5
    ```

  * Set.prototype.size

  * 객체의 원소 수를 반환한다

    ```javascript
    let ob = new Set();
    ob.add(1);
    ob.add('hello');
    console.log(ob.size);
    // 2
    ```

* reduce()

  * 배열의 각 요소에 대해 파라미터로 입력받은 callback 함수를 실행, 하나의 리턴값을 반환하는 함수

  * ` reduce(function(accumulator, currentValue, currentIndex, array), [initialValue])`

    ```javascript
    var input = require("fs").readFileSync("./test").toString().trim().split("\n");
    const t = +input[0];
    for (let i = 1; i <= t; i++) {
      let nums = input[i].split(" ").map(Number);
      let a = nums[0];
      let avg = nums.reduce((sum, v) => (sum += v), -a);
      avg /= a;
      let cnt = 0;
      for (let j = 1; j <= a; j++) {
        if (nums[j] > avg) {
          cnt++;
        }
      }
      console.log(((cnt / a) * 100).toFixed(3) + "%");
    }
    
    ```

    
