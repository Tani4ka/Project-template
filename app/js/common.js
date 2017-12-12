$(function() {
                             /**** Common scripts ****/
    /* SVG Fallback */

    //if(!Modernizr.svg) {
    //    $("img[src*='svg']").attr("src", function() {
    //        return $(this).attr("src").replace(".svg", ".png");
    //    });
    //};

    /* picturefill */

   // picturefill({
   //     reevaluate: true,
   //     elements: [ document.getElementById("picture-bg") ]
   // });


    /* Retina cover plugin*/
    //$('.bg-stretch').retinaCover();

    /* Preloader */
    var hellopreloader = document.getElementById("hellopreloader_preload");
    function fadeOutnojquery(el){
        el.style.opacity = 1;
        var interhellopreloader = setInterval(function(){
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <=0.05){
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";}
        },16);
    }
    window.onload = function(){
        setTimeout(function(){
            fadeOutnojquery(hellopreloader);
        },1000);
    };


    /* E-mail Ajax Send */

    //Documentation & Example: https://github.com/agragregra/uniMail
    //$("form").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        type: "POST",
    //        url: "mail.php", //Change
    //        data: th.serialize()
    //    }).done(function() {
    //        alert("Thank you!");
    //        setTimeout(function() {
    //            // Done Functions
    //            th.trigger("reset");
    //        }, 1000);
    //    });
    //    return false;
    //});


    /* E-mail Ajax Send example */

    ////Documentation & Example: https://github.com/agragregra/uniMail
    //$(".callback").submit(function() { //Change
    //    var th = $(this);
    //    $.ajax({
    //        //type: "POST",
    //        //url: "mail.php", //Change
    //        //data: th.serialize()     // need hostname with imail
    //
    //    }).done(function() {
    //        $('.success').addClass('visible');
    //        setTimeout(function() {
    //            th.trigger("reset");
    //            $('.success').removeClass('visible');
    //            $.magnificPopup.close();
    //        }, 3000);
    //    });
    //    //}).done(function() {
    //    //    $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn(); // alert("Thank you!");
    //    //    setTimeout(function() {
    //    //        $(th).find('.success').removeClass('active').fadeOut();// Done Functions
    //    //        th.trigger("reset");
    //    //    }, 3000);
    //    //});
    //    return false;
    //});


    /* Chrome Smooth Scroll */
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {};


    /* Prevent Drag for a, img */

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


    /* Scroll page to top */

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });


    /* Preloader */

    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });


    /* disable hover while scrolling */

    //var body = document.body,
    //  timer;
    //window.addEventListener('scroll', function() {
    //    clearTimeout(timer);
    //    if(!body.classList.contains('disable-hover')) {
    //        body.classList.add('disable-hover')
    //    }
    //    timer = setTimeout(function(){
    //        body.classList.remove('disable-hover')
    //    },500);
    //}, false);

                        /***** Aditional scripts *****/

    /* Menu open close */

    var menuBg = $('.menu-bg');
    var menu = $('.menu');
    var opener = $('.open');
    var open = false;

    $('.open').click(function (e) {
        if (open == false) {
            menuBg.css({'height': '100vh', 'transform': 'scaleY(1)'});
            menu.css({'transform': 'translateX(0) scaleY(1)', 'opacity': '1',
                'transition': 'transform .6s ease-in, opacity .6s ease-in', 'transition-delay': '.5s'});
            //menu.css({'opacity': '1'});
            //menu.addClass("flipInY");
            opener.addClass("open_active");
            open = true;
        } else {
            (window.onresize = function() {
                if (window.innerWidth < 768) {
                    menuBg.css({'transform': 'scaleY(0)', 'height': '0', 'transition-delay': '.3s'});
                    menu.css({'display': 'block;', 'transform': 'translateX(-100px) scaleY(0.6)', 'opacity': '0',
                        'transition': 'transform .3s ease-in, opacity .5s' +
                        ' cubic-bezier(0,.86,.48,.98)'});
                    //menu.css({'opacity': '0'});
                    //menu.removeClass("flipInY");
                    opener.removeClass("open_active");
                    open = false;
                } else {
                    menuBg.css({'transform': 'scaleY(1)'});
                    menu.css({'display': 'flex;', 'transform': 'translate(0)', 'opacity': '1'});
                    opener.removeClass("open_active");
                    //menu.removeClass("flipInY");
                }
            })()
        }
        e.preventDefault();
    });
    $('.logo').click(function (e) {
        e.preventDefault();
    });





    /* Menu active link */

    $('.menu__link').click(function(){
        $('.menu__link').removeClass("menu__link_active");
        $(this).addClass("menu__link_active");
    });



    /* Equalheight without plug plugin */

    //(function ($) {
    //    $.fn.equalHeights = function () {
    //        var $items = $(this);
    //        function equalize() {
    //            $items.height('initial');
    //            var maxH = $items.eq(0).height();
    //            $items.each(function () {
    //                maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
    //            });
    //            $items.height(maxH);
    //        }
    //        equalize();
    //        $(window).bind('resize', function () {
    //            equalize();
    //        });
    //    };
    //})(jQuery);
    //
    //// call equalHeights
    //$('.services__header').equalHeights();
    //$('.services__text').equalHeights();


    /* Fixed sidebar block */

    //$(function(){
    //    var topPos = $('#floating').offset().top; //расстояние от АйДи флоатинг до начала документа
    //    $(window).scroll(function() { //при скроллинге:
    //        var top = $(document).scrollTop(),//скролинг документа
    //            pip = $('footer').offset().top,//расстояние от футера до начала документа
    //            height = $('#floating').outerHeight();//высота черного блока
    //        console.log(topPos)//вывод в консоль любого значения
    //
    //        if (top > topPos && top < pip - height) {//проскролено больше расстояния от АйДи флоатинг до начала документа
    //            //и проскролено меньше чем расстояние от футера минус высота черного блоока
    //            $('#floating').addClass('fixed').fadeIn(300); //добавляем черному блоку класс фиксед и плавное проявление
    //        }
    //        else if (top > pip - height) {$('#floating').fadeOut(100);//скрытие черного блока при достижении футера
    //        }
    //        else {$('#floating').removeClass('fixed');}//убираем класс фиксед
    //    });
    //});


    /* Popup show hide */

    //$(document).ready(function(){
    //    PopUpHide();
    //});
    //function PopUpShow(){
    //    $("#popup1").show();
    //}
    //function PopUpHide(){
    //    $("#popup1").hide();
    //}


    /* Humburgers */

    //var $humburger = $(".hamburger");
    //var API = $menu.data( "mmenu" );
    //
    //$humburger.on( "click", function() {
    //    API.open();
    //});
    //
    //API.bind( "open:finish", function() {
    //    setTimeout(function() {
    //        $humburger.addClass( "is-active" );
    //    }, 100);
    //});
    //API.bind( "close:finish", function() {
    //    setTimeout(function() {
    //        $humburger.removeClass( "is-active" );
    //    }, 100);
    //});


    /* Owl-carousel (если карусель заружена, сделать блоки одинаковой высоты) */

    //$('.carousel-services').on('initialized.owl.carousel', function () {
    //    setTimeout(function () {
    //        carouselService()
    //    }, 100);
    //});

    //Owl-carousel

    //$('.carousel-services').owlCarousel({
    //    loop: true,
    //    nav: true,
    //    smartSpeed: 700,
    //    navText: ['<i class="fa fa-angle-double-left">', '<i class="fa fa-angle-double-right">'],
    //    responsiveClass: true,
    //    dots: false,
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        800: {
    //            items: 2
    //        },
    //        1100: {
    //            items: 3
    //        }
    //    }
    //});


    /* Blocks the same height for owl-carousel for images */

    //function carouselService() {
    //    $('.carousel-services__item').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.carousel-services__content').outerHeight();
    //        ths.find('.carousel-services__image').css('min-height', thsh);
    //    });
    //}carouselService();


    /* Blocks the same height */

    //function carouselService() {
    //    var mh = 23;
    //    $('.services').each(function () {
    //        var ths = $(this),
    //            thsh = ths.find('.services__header').outerHeight();
    //        //console.log(thsh);
    //        if(thsh > mh) {
    //            mh = thsh;
    //        };
    //    });
    //
    //    $('.services__header').height(mh);
    //    //console.log($('.services__header').outerHeight());
    //}carouselService();


    /* Add last/first span for cms */

    //$('.carousel-services__composition .carousel-services__header').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>')); // выделяет последнее слово в span
    //});


    //$('section .h2').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));  // выделяет первое слово в span
    //});


    //$('.start .heading__header').each(function () {
    //    var ths = $(this);
    //    ths.html(ths.html().replace(/(\w+\'\w+\s+\w+\!)$/, '<span>$1</span>')); // выделяет 2 последнее слово в span
    //});

    // Add two last words in span
    //$('.skills .heading_wrap .h2').each(function(){
    //    var $this = $(this), text=$this.text().trim(), words = text.split(/\s+/);
    //    var lastWords = words.splice(-2);
    //    var join = lastWords.join(' ');
    //    words.push('<span class="h2_orange">' + join + '</span>');
    //    $this.html(words.join(' '));
    //});

    /* Selectize */
    //$('select').selectize();


    /* Resize Window (in the end) */

    //function onResize() {
    //    $('.carousel-services__content').equalHeights();  // for owl-carousel,
    //}onResize();
    //window.onresize = function () {
    //    onResize()
    //};


    /* Superfish */

    //$('.top-line .sf-menu').superfish({
    //    cssArrows: false,
    //    hoverClass: 'no-class',
    //    delay: 200
    //});


    /* Owl-carousel */

    //var owl = $('.slider');
    //owl.owlCarousel({
    //    loop: true,
    //    items: 1,
    //    itemClass: 'slide-wrap',
    //    nav: true,
    //    navText:'',  // if we have additional owl-nav, default owl-nav will be empty.
    //    dots: true,
    //    smartSpeed: 700
    //});
    //
    //// nav for additional owl-nav
    //$('.owl-nav__prev').click(function(){
    //    owl.trigger('prev.owl.carousel');
    //});
    //$('.owl-nav__next').click(function(){
    //    owl.trigger('next.owl.carousel');
    //});

    //<section class="s-slider">
    //    <div class="container">
    //        <div class="owl-nav">
    //            <div class="owl-nav__prew"><i class="fa fa-angle-left"></i></div>
    //            <div class="owl-nav__next"><i class="fa fa-angle-right"></i></div>
    //        </div>
    //    </div>
    //    <div class="slider">
    //        <div class="slide"></div>
    //        <div class="slide"></div>
    //        <div class="slide"></div>
    //    </div>
    //</section>


    /* Mmenu */

    //$(".mobile-mnu").after("<div id='my-menu'>");
    //$(".sf-menu").clone().appendTo("#my-menu");
    //$("#my-menu").find("*").attr("style", "");
    //$("#my-menu").find("ul").removeClass("sf-menu");
    //$("#my-menu").mmenu({
    //    extensions: [ 'theme-white', 'pagedim-black', 'fx-menu-slide'],    // 'widescreen' -don"t work
    //    navbar: {
    //        title: 'Меню'
    //    }
    //});


    /* Mmenu */

    //var $menu = $('#my-menu').mmenu({
    //    extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],    // 'widescreen' -don"t work
    //    navbar: {
    //        title: '<img src="img/logo.svg" alt="Салон красоты Смитлер">'
    //    },
    //    offCanvas: {
    //        position: 'right'
    //    }
    //});


    /* Gamburger for menu */

    // https://codepen.io/agragregra/pen/bEbbmZ
    //$(".mobile-mnu").click(function() {
    //    var mmApi = $("#my-menu").data( "mmenu" );
    //    mmApi.open();
    //    var thiss = $(this).find(".toggle-mnu");
    //    thiss.addClass("on");
    //    $(".main-mnu").slideToggle();
    //    return false;
    //});
    //
    //$(".ishome").click(function() {
    //    $(".toggle-mnu").removeClass("on");
    //});


    /* Magnific-popup */

    //$('.popup-with-move-anim').magnificPopup({
    //    type: 'inline',
    //    fixedContentPos: false,
    //    fixedBgPos: true,
    //    overflowY: 'auto',
    //    closeBtnInside: true,
    //    preloader: false,
    //    midClick: true,
    //    removalDelay: 300,
    //    mainClass: 'my-mfp-slide-bottom'
    //});


    /* What form did the application come from (for magnific-popup) */

    //$('a[href="#callback"]').click(function() {      // возьмет из кнопки зачение data-form и вставит в input[type=hidden] value с этим значением, чтобы знать с какой фрмы пришла заявка
    //    $('#callback .formname').val($(this).data('form'));
    //});


    /* No touch device :hover */
    //if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    //    console.log('this is a touch device');
    //    document.body.classList.add('touch');
    //} else {
    //    console.log('this is not a touch device');
    //    document.body.classList.add('no-touch');
    //}



    /* bezier animations */

    var bez = $.bez([.19,1,.22,1]);
    var bezcss = ".19,1,.22,1";
    /* Get css3 transition and transform prefixes */
    function mg_getProperty(arr0, arr1, arr2){
        var tmp = document.createElement("div");
        for(var i=0, len=arr0.length; i<len; i++){
            tmp.style[arr0[i]] = 800;
            if(typeof tmp.style[arr0[i]] == 'string'){
                return {
                    js: arr0[i],
                    css: arr1[i],
                    jsEnd: arr2[i]
                };
            }
        }
        return null;
    }
    function mg_getTransition(){
        var arr0 = ["transition", "msTransition", "MozTransition", "WebkitTransition", "OTransition", "KhtmlTransition"];
        var arr1 = ["transition", "-ms-transition", "-moz-transition", "-webkit-transition", "-o-transition", "-khtml-transition"];
        var arr2 = ["transitionend", "MSTransitionEnd", "transitionend", "webkitTransitionEnd", "oTransitionEnd", "khtmlTransitionEnd"];
        return mg_getProperty(arr0, arr1, arr2);
    }
    function mg_getTransform(){
        var arr0 = ["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform", "KhtmlTransform"];
        var arr1 = ["transform", "-ms-transform", "-moz-transform", "-webkit-transform", "-o-transform", "-khtml-transform"];
        return mg_getProperty(arr0, arr1, []);
    }
    function mg_getPerspective(){
        var arr0 = ["perspective", "msPerspective", "MozPerspective", "WebkitPerspective", "OPerspective", "KhtmlPerspective"];
        var arr1 = ["perspective", "-ms-perspective", "-moz-perspective", "-webkit-perspective", "-o-perspective", "-khtml-perspective"];
        return mg_getProperty(arr0, arr1, []);
    }
    var transition = mg_getTransition();
    var transform = mg_getTransform();
    var perspective = mg_getPerspective();


    var example9 = new Mg({    // example9
        reference:"example9",
        click:{
            activated:[0],
            cycle:true,
            interactive:true,
            multiLess:7, multiPlus:7,
            scrollWheel:true, dragWheel:true
        }
    });

    (window.onresize = function() {
        var xradius = 470;
        var yradius = 110;

        if (window.innerWidth < 1200) {
            xradius = 285;
            yradius = 100;
        }
        if (window.innerWidth < 1024) {
            xradius = 290;
            yradius = 100;
        }
        if (window.innerWidth < 768) {
            xradius = 155;
            yradius = 60;
        }
        if (window.innerWidth < 480) {
            xradius = 90;
            yradius = 60;
        }

        example9.click.onEvent = function(){
            var arr = this.multiActivated;
            var alpha = Math.PI*2/(arr.length);
            //var xradius = 300;
            //var yradius = 100;
            for (var i=0;i<arr.length;i++){
                var path = $("#"+this.reference+"-item-"+ arr[i]);
                if(arr[i]==this.activated){
                    var depth = 0;
                } else {
                    var depth = example9.mapDistanceReverse(this.multiPlus, i, arr.length, 0);
                }
                //
                var theta = alpha*(this.activated-arr[i]-depth/6)+1.6; // -depth/6 will give additional distance based on depth: it gives space for activated
                var x = 20+xradius+Math.cos(theta)*xradius;
                var y = yradius+Math.sin(theta)*yradius;
                var w = h = y/4;
                var scale = 0.2+y/140;
                if(arr[i]==this.activated){scale = 1.5; y-=30;}
                path.clearQueue().stop().css("z-index", Math.round(y/10));
                if(perspective && transition){
                    path.css(transition.css, transform.css+" 1.3s cubic-bezier("+bezcss+")");
                    path.css(transform.css, "translate3d("+x+"px,"+y+"px,0) scale("+scale+")");
                }else{
                    path.animate({transformJ:'translate('+x+','+y+') scale('+scale+')'},{queue:true, duration:1300, specialEasing: {transformJ:bez}});
                }
            }
            $("#"+this.reference+"-item-"+this.deactivated).removeClass("active");
            $("#"+this.reference+"-item-"+this.activated).addClass("active").css("z-index",100);
        }

        example9.click.scrollClick = function(){
            var path = $("#"+this.reference+"-click-scrollIn");
            path.addClass("active");
        }
        example9.click.scrollMove = function(){
            var path = $("#"+this.reference+"-click-scrollIn");
            if(perspective && transition){
                path.css(transition.css, transform.css+" 0s");
                path.css(transform.css, "translate3d("+this.scrollPosition+"px,0,0)");
            }else{
                path.clearQueue().stop().animate({left:this.scrollPosition},{queue:true, duration:0, specialEasing: {left:bez}});
            }
        }
        example9.click.scrollRelease = function(){
            var path = $("#"+this.reference+"-click-scrollIn");
            path.removeClass("active");
            if(perspective && transition){
                path.css(transition.css, transform.css+" 1.2s cubic-bezier("+bezcss+") 0s");
                path.css(transform.css, "translate3d("+this.scrollPosition+"px,0,0)");
            }else{
                path.clearQueue().stop().animate({left:this.scrollPosition},{queue:true, duration:300, specialEasing: {left:bez}});
            }
        }
        example9.click.dragMove = function(){
            var path = $("#"+this.reference+"-click-dragIn");
            if(perspective && transition){
                path.css(transition.css, transform.css+" 0s");
                path.css(transform.css, "translate3d("+this.dragPosition+"px,0,0)");
            }else{
                path.clearQueue().stop().animate({left:this.dragPosition},{queue:true, duration:0, specialEasing: {left:bez}});
            }
        }
        example9.click.dragRelease = function(){
            var path = $("#"+this.reference+"-click-dragIn");
            if(perspective && transition){
                path.css(transition.css, transform.css+" 1.2s cubic-bezier("+bezcss+") 0s");
                path.css(transform.css, "translate3d("+this.dragPosition+"px,0,0)");
            }else{
                path.clearQueue().stop().animate({left:this.dragPosition},{queue:true, duration:300, specialEasing: {left:bez}});
            }
        }
        example9.init();

    })();

});




















