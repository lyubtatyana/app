$(document).ready(function(){
    $('.review').slick({
        arrows: true,
        dots: true,
    });
  });

  $(document).ready(function(){
    $('.main__burger').click(function(event) {
        $('.main__burger, .main__navigation, .main__logo, .main__search').toggleClass('active');
    });
});
