$(function () {
    $('.visual_Slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
    });
});

$(function () {
    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
        }
    })

    $(function () {
        $('.model_Slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        })
    });

    $('.button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 300)
    })

    $(function () {
        $('.text_slide').slick({
            arrows: false,
            vertical: true,
            autoplay: true,
        });
    });
});