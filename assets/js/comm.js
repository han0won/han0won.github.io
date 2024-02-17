new fullpage('#fullpage', {
    anchors: ['intro', 'about-me', 'portfolio-1', 'portfolio-2', 'more-info']
});

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  })
  
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})

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

