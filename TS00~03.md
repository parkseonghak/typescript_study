# 타입스크립트
## 타입스크립트란
  - 타입스크립트는 자바스크립에 타입을 부여한 확장된 언어  
  - 타입스크립트는 자바스크립트와 달리 브라우저에 실행하기 위해 파일을 한버 변환해주어야함  
  - 이러한 변환 과정을 우리는 컴파일(compile) 이라고 부름

## 타입스크립트의 장점
  - 에러의 사전 방지
  - 코드 가이드 및 자동 완성(개발 생산성 향상)
---  

## 자바스크립트를 타입스크립트처럼 코딩하는법
    /** 
    * @param {number} a 첫번째 숫자
    * @param {number} b 두번째 숫자
    *
    */
    function sum(a, b) {
        return a + b;
    }
    sum(10, 20);
    sum(10, '20'); <- error

자바스크립트는 잘못된 부분을 알려주지않는다. 하지만 // @ts-check 작성시 오류가 나는 부분을 체크해주는 기능이 생긴다.

---

## 타입스크립트를 자바스크립트로 컴파일 하는 방법
1. 터미널에서 node가 설치되어있는지 확인 (터미널에서 node -v로 버전확인 후 미설치시 설치)
1. 변환할 타입스크립트가 있는 폴더로 터미널실행
1. 터미널에서 npm i typescript -g
1. 설치 이후 tsc 파일명 -> 타입스크립트 > 자바스크립트 파일로 변환

---

## 타입스크립트 문법
### 1. 기본 타입 

>변수 선언또는 배열 선언을 할때 각각 타입을 정할수 있으며 타입에 맞지않는 값을 입력할 경우 에러가 발생
        //JS 문자열
        var str = 'hello

        //TS 문자열
        let str: string = 'hello

        //TS 숫자
        let num:number = 1

        //TS 배열
        let arr: Array<number> = [1,2,3];
        let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
        let items: number[] = [1,2,3

        //TS 튜플
        let address: [string, number] = ['gangnam', 100

        //TS 객체
        let obj: object = {}

        let person: object = {
          name: 'capt'
          age: 100
        }

        let person: { name: string, age: number } = {
        name: 'thor',
        age: 1000
        }

        //TS 진위값
        let show: boolean = true;

### 2. 함수 타입
>기본 타입과 동일하게 각각 인자에 대한 타입을 정의할 수 있으며 정의된 타입이 아닐 경우 에러발생 또한 인자의 갯수와 동일하지 않을 경우에도 에러가 발생하지만 특정 인자에 '?'를 작성하면 자바스크립트와 같이 인자를 넣거나 안넣어도 됨 이것을 함수의 '옵셔널 파라미터'라 부름

        // 함수의 파라미터에 타입을 정의하는 방식
        // function sum(a: number, b: number) {
        //     return a + b;
        // }
        // sum(10, 20);

        // 함수의 반환 값에 타입을 정의하는 방식
        function add(): number {
            return 10;
        }

        // 함수에 타입을 정의하는 방식
        function sum(a: number, b: number): number {
            return a + b;
        }

        sum(10, 20, 30, 40,);

        // 함수의 옵셔널 파라미터
        function log(a: string, b?: string) {
        
        }
        log('hello world');
        log('hello ts', 'abc');