/**
 * Created by JetBrains PhpStorm.
 * User: Mike
 * Date: 27/8/2012
 * Time: 4:57 μμ
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function () {

    var scrollDuration = 700;

    $('#banner').effect('bounce', {times:3, distance:5}, 200);

    setInterval(function () {
        $('#banner').effect('bounce', {times:3, distance:5}, 200);
    }, 10000);

    $('#navMe').click(function () {
        $.scrollTo('#me', scrollDuration);
    });

    $('#navPortfolio').click(function () {
        $.scrollTo('#portfolio', scrollDuration);
    });

    $('#navContact').click(function () {
        $.scrollTo('#contact', scrollDuration);
    })

    $('.send').click(function () {
        $('.letter')
            .animate({
                'top':'210'
            }, 200)
            .animate({
                'top':'-500',
                'opacity':'0'
            }, 600).
            fadeOut();
    })
    $('.sendanother').click(function () {
        $('.letter')
            .show()
            .animate({
                'top':'200',
                'opacity':'1'
            }, 600)

    })

    $('.close').click(function () {
        $('.frameborder.large')
            //.animate({
            //    'top':'-600'
            //}, 500);
            .fadeOut();
    });

    $('.frameborder.small').click(function(){
        $('.frameborder.large').fadeIn();
    })

});

