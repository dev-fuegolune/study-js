// (function(){})() 선언과 동시에 사용

(function(expression){
    console.log(eval(expression));
})("2+3*6-7");

(function(string){
    console.log(parseInt(string) === 34);
})("34");

(function(value){
    console.log(isNaN(value));
    console.log(isFinite(value));
})("hello" / 3);//=nan

let test = 10;

(function(value){
    console.log(isNaN(value));
    console.log(isFinite(value));
})(parseInt(test));//test는 숫자 nan가아님 