new fullpage('#fullpage', {
    anchors: ['intro', 'about-me', 'portfolio-1', 'portfolio-2', 'more-info']
});

$(document).ready(function(){
    $('.emoji-slick').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      vertical: true,
      infinite: true, 
      prevArrow: false,
      nextArrow: false,
    });
});