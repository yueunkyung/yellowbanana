$(function(){
    $(".m_menu_wrap>button").click(function(){
        $(this).toggleClass("on");
        $(this).next().stop().slideToggle(700);
    });
}); //E