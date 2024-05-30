
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(document).ready(function(){
    setTimeout(function(){
        $('.preloader').fadeOut();
    },3000);
});


$(document).ready(function(){

        var btn = $('.to_top');
        btn.hide(); 
        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });

        btn.on('click', function(e) {
        e.preventDefault();
            $('html, body').animate({scrollTop:0}, '400');
        });

    });

    new WOW().init();   


AOS.init(); 

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
   
$('#testi1').owlCarousel({
    loop:true,
    items:1,
    margin: 20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:300,
})
$('#price').owlCarousel({
    loop:true,
    items:3,
    margin: 20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:300,
})


$('.main_menu li > a').click(function(){
    $('.main_menu li a').removeClass('nav_active');
    $(this).addClass('nav_active')
  });