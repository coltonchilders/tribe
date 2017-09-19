$(function(){
  $(window).scroll(function(){
    var winTop = window.scrollY;
    if(winTop >= 800){
      $('.header').addClass('shrink').addClass('navbar-fixed-top');
        $('.offset').addClass('shrink');
    }
    else if (winTop < 800) {
      $('.header').removeClass('shrink').removeClass('navbar-fixed-top');
        $('.offset').removeClass('shrink');
    }//if-else
  });//win func.
});//ready func.
