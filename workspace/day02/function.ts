/* JS에서는 오버로딩을 지원하지 않는다. */

let result: number = add(1, 3);
console.log(result);
result = add(1, 3, 4);//만약 add(num1, num2){num1+num2}이렇게 저장되어 있으면
console.log(result);

// /* 가변 인자 */
// function add(...numbers: number[]) {//타입스크립트라서 변수의 타입이 number라고 알려줌
//     let result: number = 0; //result에 number를 넣어주고

//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }

//     return result;
// }

function add(number1, number2, number3) {
    return number1 + number2 + number3;
}

/* 같은 이름으로 선언하게 되면 가장 최근에 선언된 함수가 적용된다. */
function add(number1, number2){//뭘 쓰던 이게 적용
    return number1 + number2;
}
//가장 최근 선언된게 2개짜리 매개변수인데 3개가 들어온다 ->하나는 undefined됨-> undefined는 숫자가 아니므로 결과값NaN
// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init

intro("한동석", 20, "남자", "강사");

function intro(name: string, ...args: any[]) {//Strig 타입의 이름과 여러개의 가변 인자를 받아서
    console.log(`이름: ${name}`);//name을 출력하고
    for (let i = 0; i < args.length; i++) {//name 뒤에 받은 변수만큼
        console.log(args[i]);//차례로 출력하는 함수
        
    }
}