// Carousel 

$(function() {
    'use strict';
    
      $('.carousel .carousel-item[data-src]').each(function() {
          var $this = $(this);
  
          $this.prepend([
              '<div style="background-image: url(', $this.attr('data-src'), ')"></div>'
          ].join(''));
      });
  });


//   radio

jQuery(document).ready(function($) {
 
    $('#myCarousel').carousel({
            interval: 5000
    });

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    try {
        var id = /-(\d+)$/.exec(id_selector)[1];
        console.log(id_selector, id);
        jQuery('#myCarousel').carousel(parseInt(id));
    } catch (e) {
        console.log('Regex failed!', e);
    }
});
    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
             var id = $('.item.active').data('slide-number');
            $('#carousel-text').html($('#slide-content-'+id).html());
    });
});