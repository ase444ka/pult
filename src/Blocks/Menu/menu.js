import 'element-closest-polyfill';
$(function () {
    $('.menu__item').first().addClass('menu__item-active')
    $('.menu__item_anchor').on('mouseenter', function() {
        $('.menu__item-active').removeClass('menu__item-active');
    $(this.closest('.menu__item')).addClass('menu__item-active')
    }    
        )
    })
