/*
*=================================
* Hugo UILite Portfolio v0.8
*=================================
*
* Free version https://uicard.io/products/hugo-uilite
* Pro version https://uicard.io/products/hugo-uilite-pro
* Demo https://demo.uicard.io/hugo-uilite-portfolio-demo/
*
* Coded By UICardio
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/


let menuBtn = $("#menuBar");

menuBtn.click(function(){

  $('.hamburger-menu').toggleClass('animate');

  if($(".secondaryMenu").hasClass("active")){
    
    $(".secondaryMenu").removeClass("active");
    setTimeout(function(){
      $(".primaryMenu").addClass("active");
    },400);

    
  } else {
    $(".primaryMenu").removeClass("active");
  
    setTimeout(function(){
      $(".secondaryMenu").addClass("active");
    },350);
  }
});

$(document).ready(function(){
  var elements = $(".sidebar > .main-info *");

  console.log(elements);

  for(let i = 0; i < elements.length; i++){
    setTimeout(function(){
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 90 * i );
  }

  setTimeout(function(){
    $(".main-content").addClass("active");
  }, 1900);

});

/* 
*   Ryans Code
*/

$(document).ready(function(){
  $(window).resize(function(){

    if($(window).width() < 1100 && $(window).width() > 965 || $(window).width() < 480 ) {
      $("#resume-link-text").text("My Resume Here! Click Now")
    } else {
      $("#resume-link-text").text("This web portfolio is rather silly. Find my formal resume here.")
    }
  });
});
