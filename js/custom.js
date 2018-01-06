$(document).ready(function () {
    $('#help ').mouseover(function () {
        $('#help-dropdown').slideDown(1000);
    })
    $('#help ').mouseleave(function () {
        $('#help-dropdown').slideUp(1000);
    })
    $('#help-dropdown').mouseover(function () {
       $(this).stop();
    })

    $('#flag ').mouseover(function () {
        $('#flag-dropdown').slideDown(1000);
    })
    $('#flag ').mouseleave(function () {
        $('#flag-dropdown').slideUp(1000);
    })
    $('#flag-dropdown').mouseover(function () {
        $(this).stop();
    })

    $('.menu-down-link ').mouseover(function () {
        $('.mega-menu').slideDown(1000);
    })
    $('.menu-down-link ').mouseleave(function () {
        $('.mega-menu').slideUp(500);
    })
    $('.mega-menu').mouseover(function () {
        $(this).stop();
    })
    $('.mega-menu').mouseleave(function () {
        $(this).slideUp(500);
    })

})