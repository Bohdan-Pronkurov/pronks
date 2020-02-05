$(window).scroll(function() {
    var height = $(window).scrollTop();
    /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 10){
        $('.wrap-header-items').addClass('header-bg');
    } else{
        /*Если меньше 100px удаляем класс для header*/
        $('.wrap-header-items').removeClass('header-bg');
    }
});
