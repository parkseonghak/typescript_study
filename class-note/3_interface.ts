interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seonghak: User = {
    age: 28,
    name: '성학'
}

// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user);
} // 인터페이스에 따른 형식만 받겠다는 의미

const capt = {
    name: '캡틴'
}
getUser(capt);

// 함수에 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;

}

var sum: SumFunction;
sum = function(a: number, b: number):number{
    return a + b;    
}

