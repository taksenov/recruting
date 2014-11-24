/**
 * Created by admin on 17.11.2014.
 */

$('#zoom01, .cloud-zoom-gallery').CloudZoom();
// Initialize the slider.
$(function(){
    $('#slider1').Thumbelina({
        $bwdBut:$('#slider1 .left'),
        $fwdBut:$('#slider1 .right')
    });
});


(function(){

    var app = {
        initialize: function () {
            var _this = this;

            _this.setUpListeners();

        },

        setUpListeners: function () {
            var _this = this;
            /* нажатие на ссылку */
            $('.main a').on('click', app.setRating);

        },

        setRating: function (event) {
            var that = event.currentTarget;

            console.log('Ты нажал на ссылку');
/*                grandParent = $(that).closest('.voting').parent(),
                resultValue = $(that).context.text;

            $(that).closest('.voting').children('li').children('.cur').removeClass();

            event.preventDefault();
            $(that).addClass('cur');
            $(grandParent.children('.all-stars__result')).html('Рейтинг = ' + resultValue)*/
        }

    }

    app.initialize();

})();

//================================================================

