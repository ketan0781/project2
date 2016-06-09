$(document).ready(function() {

    $('.tab1').on('click',function() {
       $(this).addClass('on');
       $('.tab2').removeClass('on');
       $('.main-box').show();
       $('.copy-tab').hide();
    });

    $('.tab2').on('click',function() {
       $(this).addClass('on');
       $('.tab1').removeClass('on');
       $('.main-box').hide();
       $('.copy-tab').show();
    });
    $('.tab11').on('click',function() {
       $(this).addClass('on');
       $('.tab22').removeClass('on');
       $('.plan-table').show();
       $('.copy-tab2').hide();
    });

    $('.tab22').on('click',function() {
       $(this).addClass('on');
       $('.tab11').removeClass('on');
       $('.plan-table').hide();
       $('.copy-tab2').show();
    });



    $('#box1').on('click', function() {
        var tmp = $(this).closest('div').find('.read-more, .see-less').addClass('hide');
        setTimeout(function(){
            tmp.removeClass('hide');
        },1000);
        $(this).closest('div').find('.read-more').toggleClass('display');
        $(this).closest('div').find('.see-less').toggleClass('display');
        $(this).toggleClass('highlight').toggleClass('expand-container');
        $(this).closest('div').find('.expand-content').toggleClass('display');
    })

    $('#box2').on('click', function() {
        var tmp = $(this).closest('div').find('.read-more2, .see-less2').addClass('hide');
        setTimeout(function(){
            tmp.removeClass('hide');
        },1000);
        $(this).closest('div').find('.read-more2').toggleClass('display');
        $(this).closest('div').find('.see-less2').toggleClass('display');
        $(this).toggleClass('highlight').toggleClass('expand-container');
        $(this).closest('div').find('.expand-content').toggleClass('display');

    })

    // collapse div =============================>
    $('.sub-container1,.sub-container2').hover(function() {
        $(this).toggleClass('active2');
        $(this).css('cursor', 'pointer')
    })

    $('.sub-container1').on('click', function() {
        $('#main').toggleClass('display');
        $('#main2').addClass('display');
        $('.main-box').show();
        $('.sub-container1 h3').toggleClass('active2');
        $('.leftArrow').toggleClass('collapse').toggleClass('expand');
        $('.sub-container2 h3').removeClass('active2');
        $('.leftArrow2').addClass('collapse').removeClass('expand');
        // $('.copy-tab').toggleClass('display')
        $('.copy-tab').hide();
        $('.tab1').addClass('on');
        $('.tab11').addClass('on');
        $('.tab22').removeClass('on');
        $('.tab2').removeClass('on');
        $('#myStathalf1').circliful();
        $('#myStathalf2').circliful();
        $('#myStathalf3').circliful();
        $('#myStathalf4').circliful();
        $('#myStathalf5').circliful();
        $('#myStathalf6').circliful();
        $('#myStathalf7').circliful();
        $('#myStathalf8').circliful();
        $('#myStathalf9').circliful();
    })
    $('.sub-container2').on('click', function() {
        $('#main2').toggleClass('display');
        $('#main').addClass('display');
        $('.sub-container2 h3').toggleClass('active2');
        $('.leftArrow2').toggleClass('collapse').toggleClass('expand');
        $('.sub-container1 h3').removeClass('active2');
        $('.leftArrow').addClass('collapse').removeClass('expand');
        $(this).toggleClass('borderB');
        $('#main2').toggleClass('borderBadd');
        $('.copy-tab').hide();
        $('.copy-tab2').toggleClass('display')
         $('.tab1').addClass('on');
         $('.tab2').removeClass('on');
         $('.copy-tab2').hide();
        $('.tab1').addClass('on');
        $('.tab11').addClass('on');
        $('.tab22').removeClass('on');
        $('.tab2').removeClass('on');
        $('.plan-table').show();


    })



    // last year TrOOP display
    $('.last-year-TrOOP').on('click', function() {
        $(this).toggleClass('display');
        $('.last-year-hide').removeClass('display');
        $('.last-year-table').removeClass('display');
    })
    $('.last-year-hide').on('click', function() {
        $(this).toggleClass('display');
        $('.last-year-TrOOP').removeClass('display');
        $('.last-year-table').addClass('display');
    });




    // header phone menu
    // $('.icon-hamB').on('click', function() {

    //     $('#menu-outer').toggleClass('displayB')
    // })
    $('.pageLink').on('click', function() {
        $('#link-menu').toggleClass('display')
    })

    //box hover background change
    $("#box1").hover(
        function() {
            $(this).find('.read-more >img,.see-less>img').css({
                "background": "#1A475A",
                "opacity": "1"
            })
        },
        function() {
            $(this).find('.read-more >img,.see-less>img').css({
                "background": "",
                "opacity": ""
            })
        }

    );
    $("#box2").hover(
        function() {
            $(this).find('.read-more2 >img,.see-less2>img').css({
                "background": "#1A475A",
                "opacity": "1"
            })
        },
        function() {
            $(this).find('.read-more2 >img,.see-less2>img').css({
                "background": "",
                "opacity": ""
            })
        }

    );
});
