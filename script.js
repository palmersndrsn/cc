window.onload = function(){
  var service = $('#service');
  var contact = $('#contact');
  var blurb = $('#blurb');

  console.log(service, contact);

  service.on('click', function(){
    $('html, body').animate({
        scrollTop: $("#blurb").offset().top
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