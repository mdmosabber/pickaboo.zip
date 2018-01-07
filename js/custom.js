$(document).ready(function () {
    $('#help ').mouseover(function () {
        $('#help-dropdown').slideDown(1000);

            $('#help ').mouseleave(function () {
                $('#help-dropdown').slideUp(1000);

                $('#help-dropdown').mouseover(function () {
                    $(this).stop();
                })
            })
    })

    $('#flag ').mouseover(function () {
        $('#flag-dropdown').slideDown(1000);

        $('#flag ').mouseleave(function () {
            $('#flag-dropdown').slideUp(1000);

                $('#flag-dropdown').mouseover(function () {
                    $(this).stop();
                })
        })
    })

    $('.menu-down-link ').mouseover(function () {
        $('.mega-menu').slideDown(1000);

            $('.menu-down-link ').mouseleave(function () {
                $('.mega-menu').slideUp(100);

                $('.mega-menu').mouseover(function () {
                    $(this).stop();

                    $('.mega-menu').mouseleave(function () {
                        $(this).slideUp(100);
                    })
                })
            })
    })

    $('.menu-down-two ').mouseover(function () {
        $('.mega-menu-two').slideDown(1000);

        $('.menu-down-two ').mouseleave(function () {
            $('.mega-menu-two').slideUp(100);

            $('.mega-menu-two').mouseover(function () {
                $(this).stop();

                $('.mega-menu-two').mouseleave(function () {
                    $(this).slideUp(100);
                })
            })
        })
    })

    $('.menu-down-three ').mouseover(function () {
        $('.mega-menu-three').slideDown(1000);

        $('.menu-down-three ').mouseleave(function () {
            $('.mega-menu-three').slideUp(100);

            $('.mega-menu-three').mouseover(function () {
                $(this).stop();

                $('.mega-menu-three').mouseleave(function () {
                    $(this).slideUp(100);
                })
            })
        })
    });

    $('.hvr-radial-out').hover(function () {
        $('.zoom img').css('transform', 'scale(1.1)');

        $('.hvr-radial-out').mouseleave(function () {
            $('.zoom img').css('transform', 'scale(1)');
        })
    });

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if(top>200){
            $('.scroll-top a').fadeIn(500);
        }else {
            $('.scroll-top a').fadeOut(500);
        }
        if(top>80){
            $('.header-main-menu').css({
                'position':'fixed',
                'z-index':'99',
                'top':'0',
                'background':'#252324',
            })
        }else {
            $('.header-main-menu').css({
                'position':'inherit',
                'background':'#0198D1',
            })
        }
    });
    $('.scroll-top a').click(function () {
        $('html,body').animate({scrollTop:0}, 2000);

    });

    $(window).resize(function() {
          var getWidth = $('.hover-effect').width();
          var getHeight = $('.hover-effect').height();

          $('.hvr-radial-out').css({
              'width':getWidth,
              'height':getHeight
          });
    });

    var getWidth = $('.hover-effect').width();
    var getHeight = $('.hover-effect').height();
    $('.hvr-radial-out').css({
        'width':getWidth,
        'height':getHeight
    });

    $(window).resize(function() {
        var getWidth = $('html,body').width();
        $('.mega-menu .mega-menu-two .mega-menu-three').css({
            'width':getWidth
        });
    });

    var getWidth = $('html,body').width();
    $('.mega-menu .mega-menu-two .mega-menu-three').css({
        'width':getWidth
    });





});
