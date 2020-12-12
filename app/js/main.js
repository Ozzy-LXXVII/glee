$(function(){
    $('.product-tabs__top-item').on('click', function(e){
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');
        
        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $('.product-info__num').styler();

    $('.filter-price__input').ionRangeSlider({
        type: 'double',
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text('$' + data.from);
            $('.filter-price__to').text('$' + data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text('$' + data.from);
            $('.filter-price__to').text('$' + data.to);
        },
    });

    $('.star--recent').rateYo({
        readOnly: true,
        starWidth: '10',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing: '5px',
    });

    $('.star').rateYo({
        readOnly: true,
        starWidth: '17',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing: '10px',
    });

    $('.intro-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });

    $('.partners-slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.related-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });


    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        vertical: true
      });
      $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true
      });

});