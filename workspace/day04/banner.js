/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const next = document.querySelector("div.next");
const prev = document.querySelector("div.prev");
const buttons = document.querySelectorAll(".buttons button");
let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(auto);
        count = parseInt(button.innerHTML);
        changeButtonStyle();
        banner.style.transition = "transform 0.3s";//버튼 누르면 이동애니메이션
        banner.style.transform = `translate(${-1728 * count}px)`;//버튼 누르면 그 버튼번호의 이미지로 이동
        auto = setInterval(autoSlide, 2000);
    });
});

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/00${i+1}.png)`)
// 모든 이미지를 가진 객체를 하나씩 넘겨줌.i는 인덱스. div 안에 이미지를 넣어줌
banner.appendChild(lastImageDiv);//눈속임할 이미지 넣어줄 객체를(부모 배너의 자식 마지막에) 넣어줌
lastImageDiv.style.backgroundImage = `url(image/001.png)`;//객체에 이미지 넣어줌

banner.insertBefore(firstImageDiv, document.querySelector("div.banner div"));//객체를 첫이미지 앞에 넣어준다
firstImageDiv.style.backgroundImage = `url(image/00${imageDiv.length}.png)`//객체에 이미지 넣어줌

banner.style.transform = `translate(-1728px)`;//한칸이동객체

function changeButtonStyle() {
    if(temp){//원래버튼 temp
        temp.style.background = "white";//원래 색으로 변함
        temp.style.color = "black";
    }
    buttons[count - 1].style.background = "black";//눌리면 색변함
    buttons[count - 1].style.color = "white";
    temp = buttons[count - 1];//
}

function autoSlide(){
    banner.style.transition = "transform 0.3s";//3초에 걸쳐이동
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    console.log(count);
    if(count == 7) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1728px)";
        }, 300);
    }
    changeButtonStyle();
}

prev.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1728 * --count}px)`;
    if(count == 0) {
        count = 6;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = `translate(${-1728 * (imageDiv.length)}px)`;
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});

next.addEventListener("click", function(){
    if(checkArrow){return;}
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-1728 * ++count}px)`;
    if(count == 7) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-1728px)";
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(()=>{checkArrow = false}, 300);
});
