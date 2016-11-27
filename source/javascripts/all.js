// $(function($) {
//   $.getJSON("../data/kerning-data.json" , function(_data) {
//     $('li').kerning({"data":_data});
//   });
// });
$(document).ready(function(){
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 30000,
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    centerPadding: '0'
  });
});
