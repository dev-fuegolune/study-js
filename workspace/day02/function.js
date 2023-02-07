/* JS에서는 오버로딩을 지원하지 않는다. */
// 가변 인자:가변인자, 즉 함수의 파라메터의 갯수가 가변적이여야할 때
var result = add(1, 3);//사용 인수 아규먼트를 두개를 날리면 
console.log(result);//결과 4
result = add(1, 3, 4);//사용
console.log(result);//결과 8
/* 가변 인자 */
// function add() {//함수 선언 및 정의
//     var numbers = [];////변수를 넣을 저장공간 설정
//     for (var _i = 0; _i < arguments.length; _i++) {
//         numbers[_i] = arguments[_i];
//     }
//     var result = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result;
// }
/* 같은 이름으로 선언하게 되면 가장 최근에 선언된 함수가 적용된다. */
function add(number1, number2){
    return number1 + number2;
}
function add(number1, number2, number3) {
    return number1 + number2 + number3;
}
// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init

intro("한동석", 20, "남자", "강사");//intro함수 사용
function intro(name) {
    var args = [];
    for (var _i = 1 ; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];//args[0]=arguments[1]
    }
    console.log("\uC774\uB984: ".concat(name));
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
