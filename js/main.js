$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.fader .slogan').css({
        'opacity': ((height - scrollTop) / height)
    });
});
