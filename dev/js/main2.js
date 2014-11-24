/**
 * Created by admin on 24.11.2014.
 */


$(document).ready(function(){

    //dropdown фильтр
    $('.filter__item-trigger').on('click', function(e){
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.filter__item'),
            list = $this.closest('.filter__list'),
            items = list.find('.filter__item'),
            content = item.find('.filter__item-content'),
            otherContent = list.find('.filter__item-content'),
            duration = 300;

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');

            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);

        } else {
            content.stop(true, true).slideUp(duration);
            item.removeClass('active');
        }
    });

    /*//табы характеристики
    $('#tab-container').easytabs({
        animate: true,
        animationSpeed: "slow",
        defaultTab: "li.option__item-active"
    });

    //табы отзывы
    $('#tab-container__reviews').easytabs({
        animate: true,
        animationSpeed: "slow",
        defaultTab: "li:first-child",
        collapsible: true
    });

    //Чекбоксы
    $('input[type="checkbox"]').ezMark();

    //Ползунок фильтр по цене
    $(function() {
        $( "#slider" ).slider({
            min: 500,
            max: 15000,
            values: [4000, 6000],
            step: 500,
            range: true,
            stop: function(event, ui) {
                $("input#minCost").val($("#slider").slider("values",0));
                $("input#maxCost").val($("#slider").slider("values",1));
            },
            slide: function(event, ui){
                $("input#minCost").val($("#slider").slider("values",0));
                $("input#maxCost").val($("#slider").slider("values",1));
            }
        });
    });

    $("input#minCost").change(function(){
        var value1=$("input#minCost").val();
        var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values",0,value1);
    });


    $("input#maxCost").change(function(){
        var value1= $("input#minCost").val();
        var value2= $("input#maxCost").val();

        if (value2 > 20000) { value2 = 20000; $("input#maxCost").val(20000)}

        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#maxCost").val(value2);
        }
        $("#slider").slider("values",1,value2);
    });

    //Слайдер
    $(".slider__controls-button").on("click", function(e){
        e.preventDefault();

        var
            $this = $(this),
            container = $this.closest(".slider"),
            list = container.find(".slider__list"),
            items = container.find(".slider__item"),
            activeSlide = items.filter(".active"),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = items.first(),
            lastSlide = items.last(),
            sliderOffset = container.offset().left,
            reqPos = 0;

        if ($(this).hasClass("slider__next")) {
            if (nextSlide.length) {
                findReqPos(nextSlide);
                removeActiveClass(nextSlide);
            } else {
                findReqPos(firstSlide);
                removeActiveClass(firstSlide);
            }
        } else {

            if (prevSlide.length) {
                findReqPos(prevSlide);
                removeActiveClass(prevSlide);
            } else {
                findReqPos(lastSlide);
                removeActiveClass(lastSlide);
            }
        }

        list.css("left", "-=" + reqPos + "px");

        function removeActiveClass (reqSLide) {
            reqSLide.addClass("active").siblings().removeClass("active");
        }

        function findReqPos (slide) {
            reqPos = slide.offset().left - sliderOffset;
        }

    });

    //Слайдшоу
    $('.slider__pic').on('click',function(e){
        e.preventDefault();

        var
            $this = $(this),
            container = $this.closest('.slider'),
            display = container.find('.slider__display'),
            path = $this.find('img').attr('src'),
            duration = 300;

        if (!$this.hasClass('active')) {
            $this.addClass('active').siblings().removeClass('active');

            display.find('img').fadeOut(duration,function (){
                $(this).attr('src',path).fadeIn(duration);
            });
        }
    });

    //Zoom
    $("#zoom_mw").elevateZoom({scrollZoom : true});*/

    //всплывашка
    $(window).on('scroll',function(e) {
        e.preventDefault();

        var top = $(window).scrollTop(),
            fixedMenu = $(".header-fixed");
        if (top > 100) {
            fixedMenu.addClass("active");
        } else {
            fixedMenu.removeClass("active");
        }
    });

    //popup корзины
    $('.header-option__card').on('mouseenter', function(e){
        $(this).closest('.header-option__card').addClass('active');
    });

    $('.header-option__card').on('mouseleave', function(){
        $(this).removeClass('active');
    });

    $(document).on('click touchstart', function(e){
        if (!$(e.target).closest('.header-option__card').length) {
            $('.header-options__card').removeClass('active');
        }
    });

    //стилизация скролла
    $('.backet-popup__scroll').jScrollPane();

    //Валидация формы отзывов
  //  $("#reviews__form").validate();

});
