window.onload = function(){
  var service = $('#service');
  var contact = $('#contact');
  var blurb = $('#blurb');
  var servScroll = $('#services-scroll');

  var roomArr = ['Video Conferencing',
  'Digital Signage',
  'Video Wall',
  'Sound Masking System',
  'Training rooms',
  'Auditorium',
  'Huddle Rooms'];

  // need to make a continous loop for roomArr
  // needs a timer
  // needs an animation
  // look into CSS before writing script
  //
  var roomRotate = function() {
    for (var i in roomArr) {
      console.log(roomArr[i]);
      servScroll.innerHTML = roomArr[i];
    }
    roomRotate();
  };

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

  roomRotate();
};