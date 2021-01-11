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
        step: 0.01,
        prettify_enabled: true,
        prettify_separator: ".",
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
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="15px" viewBox="0 0 16 15"><path d="M 7.203125 0.523438 L 5.390625 4.398438 L 1.332031 5.023438 C 0.601562 5.136719 0.3125 6.082031 0.839844 6.625 L 3.773438 9.640625 L 3.082031 13.90625 C 2.957031 14.675781 3.726562 15.25 4.371094 14.890625 L 8 12.878906 L 11.628906 14.890625 C 12.273438 15.25 13.042969 14.675781 12.917969 13.90625 L 12.226562 9.640625 L 15.160156 6.625 C 15.6875 6.082031 15.398438 5.136719 14.667969 5.023438 L 10.609375 4.398438 L 8.796875 0.523438 C 8.472656 -0.171875 7.53125 -0.179688 7.203125 0.523438 Z M 7.203125 0.523438 "/></svg>'
    });

    $('.star').rateYo({
        readOnly: true,
        starWidth: '17',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        spacing: '10px',
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="15px" viewBox="0 0 16 15"><path d="M 7.203125 0.523438 L 5.390625 4.398438 L 1.332031 5.023438 C 0.601562 5.136719 0.3125 6.082031 0.839844 6.625 L 3.773438 9.640625 L 3.082031 13.90625 C 2.957031 14.675781 3.726562 15.25 4.371094 14.890625 L 8 12.878906 L 11.628906 14.890625 C 12.273438 15.25 13.042969 14.675781 12.917969 13.90625 L 12.226562 9.640625 L 15.160156 6.625 C 15.6875 6.082031 15.398438 5.136719 14.667969 5.023438 L 10.609375 4.398438 L 8.796875 0.523438 C 8.472656 -0.171875 7.53125 -0.179688 7.203125 0.523438 Z M 7.203125 0.523438 "/></svg>'
    });

    $('.intro-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });

    $('.related-slider').slick({
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
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