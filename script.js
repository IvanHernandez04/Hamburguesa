var swiper = new Swiper(".mySwiper-1", {
slidesPerView:1,
spaceBetween: 30,
loop: true,
pagination:{
    el:".swiper-pagination",
    clickable:true,
},
navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
}
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:1,
    spaceBetween: 30,
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakPoints :{
        0:{
            sliderPerView:1,
    },
    520:{
        sliderPerView:2,

    },
    950:{
        sliderPerView:23,

    }
}
    });
    let tabInputs = document.querySelectorAll(".tabInput");
    tabInputs.forEach(function(input){
        input.addEventListener('change', function () {
            let id = input.ariaValueMax;
            let thisSwiper = document.getElementById('swiper'+id);
            thisSwiper.swiper.update();
        })
    });
    