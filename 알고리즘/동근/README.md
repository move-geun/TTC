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

    

  

