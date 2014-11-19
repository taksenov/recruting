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