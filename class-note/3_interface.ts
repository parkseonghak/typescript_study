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

//인덱싱
interface StringArray {
    // [] : 속성을 따로 부여하지 않고 StringArray를 사용할 때마다 임의로 계속 부여해서 사용
    [index : number]: string;
}

var arr : StringArray = ['a', 'b', 'c'];
// arr[0] = 10

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: 'css',
    jsfile: /\.js$/,
}

obj['cssFile'] = 'a'
Object.keys(obj).forEach(function(value) {

})

interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    age: number;

}

