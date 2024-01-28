const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container");
    var fixedImg = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter" , function(){
        fixedImg.style.display = "block";
    });
    elemC.addEventListener("mouseleave" , function(){
        fixedImg.style.display = "none";
    });
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter" , function(){
            var image = e.getAttribute("data-image");
            fixedImg.style.backgroundImage = `url(${image})`;
        });
    });
}

page3Animation();

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
    });
}

swiperAnimation();


function loaderAnimation(){
    var loader = document.querySelector("#loader");
    setTimeout(function(){
        loader.style.top = "-100%";
    },4200);
}

loaderAnimation();

