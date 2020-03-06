

// Modal animation
var $post = $(".modal_section");
setInterval(function () {
  $post.toggleClass("show");
}, 6000);


// header scroll 
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 60) {
    $(".header-wrapper").addClass("scrolled");
  } else {
    $(".header-wrapper").removeClass("scrolled");
  }
});