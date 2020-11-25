var mySwiper = new Swiper('.swiper-container',{
    slidesPerView : 3,
    slidesPerGroup : 1,
    autoplay:false,
    loop: false,
})

//鼠标覆盖停止自动切换
/* mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
  }
  
//鼠标离开开始自动切换
mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
  } */