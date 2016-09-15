window.onload = function(){
  var servScroll = $('#services-scroll');
  var service = $('#service');
  var contact = $('#contact');
  var blurb = $('#blurb');

  // var roomArr = ['Video Conferencing',
  // 'Digital Signage',
  // 'Video Wall',
  // 'Sound Masking System',
  // 'Training rooms',
  // 'Auditorium',
  // 'Huddle Rooms'];

  // need to make a continous loop for roomArr
  // needs a timer
  // needs an animation
  // look into CSS before writing script


  service.on('click', function(){
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
    return false;

  });

  contact.on('click', function(){
    $('html, body').animate({
        scrollTop: $("#loc").offset().top
    }, 1000);
    return false;
  });


  $(function() {
    $(".rslides").responsiveSlides({
      auto: true,             // Boolean: Animate automatically, true or false
      speed: 500,            // Integer: Speed of the transition, in milliseconds
      timeout: 8000,          // Integer: Time between slide transitions, in milliseconds
      pager: false,           // Boolean: Show pager, true or false
      nav: false,             // Boolean: Show navigation, true or false
      random: false,
      namespace: "rslides",   // String: Change the default namespace used
      before: function(){},   // Function: Before callback
      after: function(){}
    });
  });

  // $(document).ready(function(){
  //   $('#slider').bxSlider({
  //   ticker: true,
  //   tickerSpeed: 5000,
  //   tickerHover: true
  //   });
  // });

};