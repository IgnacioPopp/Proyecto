$(document).ready(function(){

    $(window).scroll (function() {
        if($(this).scrollTop() > 0){
            $('eheader').addClass('header2');
        }else{
            $('header').removeClass('header2');
        }
    });
});