// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let shop = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

let productsJSON = JSON.stringify(shop);
// console.log(productsJSON);
let file = require('fs');
// let products = null;
// file.writeFile('shop.json', productsJSON , 'utf-8', function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('성공');
//     }
// });

// file.readFile('shop.json', 'utf-8', function(error, content) {
//         if(error){
//             console.log(error);
//         }else{
//             // console.log(content);
//             // console.log(JSON.parse(content));//object로 바꿔줌
//            let products = JSON.parse(content);//object로 바꿔줌
//           let array =
//          [products.map(product=>product.price).reduce((totalPrice, price)=>totalPrice+price),
//          products.map(product=>product.stock).reduce((totalStock, stock)=>totalStock+stock)];
//             let file = require('fs');
//             file.writeFile('sum.json', JSON.stringify(array) ,'utf-8',error=>console.log(error? error:"성공"));
//         }
// });


file.readFile('sum.json', 'utf-8', (error, content)=>
    {console.log(content)});


// console.log(shop);
//     products.map(product=>product.price).forEach(price=>console.log(price));
// // 객체를 하나씩 뽑아서 거기서 프로퍼티를 가지고 와서 프로퍼티
//    let arr=[products.map(product=>product.price).reduce((totalPrice, price)=>totalPrice+price);
//             products.map(product=>product.stock).reduce((totalStock, stock)=>totalStock+stock);]
//     console.log(arr);
//     //     if(error){
//     //         console.log(error);
//     //     }else{
//     //         console.log(content);
//     //     }
//     // });



// // 각 상품별 총 가격을 구한 뒤 출력한다.
// // callback 함수를 사용한다.
// // 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});