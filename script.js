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

  for (var i in roomArr) {
    console.log(roomArr[i]);
    servScroll.innerHTML = roomArr[i];
  }

  console.log(service, contact);

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


};