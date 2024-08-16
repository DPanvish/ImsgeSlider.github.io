


let items = document.querySelectorAll(".slider .item");
let img = document.querySelectorAll("#img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let hContainer = document.querySelectorAll(".item .hContainer");
let active = 5;


loadShow();

function loadShow(){
    let st = 0;
    items[active].style.transform = "none";
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    hContainer[active].style.display = "flex";
    document.body.style.backgroundImage = `url(${img[active].src})`;
    for(var i = active + 1; i < items.length; i++){
        st++;
        items[i].style.transform = `translateX(${-160*st}px) scale(${1 - 0.2*st}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -st;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = st > 1 ? 0 : 0.6;
        hContainer[i].style.display = "none";
    }
    st = 0;
    for(var i = active - 1; i >= 0; i--){
        st++;
        items[i].style.transform = `translateX(${160*st}px) scale(${1 - 0.2*st}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -st;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = st > 1 ? 0 : 0.6;
        hContainer[i].style.display = "none";
    }
}

setInterval(() => {
    active = active - 1 >= 0 ? active - 1 : items.length;
    loadShow();
}, 5000);

prev.onclick = function(){
    active = active + 1 < items.length ? active + 1 : 0;
    loadShow();
}

next.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : items.length;
    loadShow();
}