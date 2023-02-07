// 프로퍼티 중 KEY에 ""가 있으면 JSON이고, java에서 json으로 사용
// 프로퍼티 중 KEY에 어떠한 따옴표도 없으면 JS Object이다. js 에서 "" 인식을 못하니까 js object로 변환하여 사용 

// JSON.stringify(객체): 객체를 JSON으로 
// JSON.parse(JSON 문자열): JSON을 객체로
let product = {menu : "스콘", price:"2000"};//js object 따옴표가 없다
let productJSON = JSON.stringify(product);// js object를 json으로 

let user = {name: "한동석", age: 20};//js object(클래스 string이 아님)
let userJSON = JSON.stringify(user);//

user = JSON.parse(userJSON);

 //console.log(user);//jsonobject
//console.log(userJSON); //json
//console.log(user.name);
console.log(userJSON.name);