// script-file.html
// url.html

function changeImage(object){//object=img
    let status = object.classList[0];/* img태그의 첫번째 클래스 에 있는 값을 status에 저장 */
    // let=자바의 변수랑 비슷하게 쓰임
    if(status == "on"){/* status가 on 이면  */
        object.classList.replace("on", "off");/* on을 off로 바꿔줌 */
        object.src = "image/icon3.png";
        return;
    }

    object.classList.replace("off", "on");
    object.src = "image/icon4.png";

}