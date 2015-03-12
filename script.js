window.onload = function(){
  var service = $('#service');
  var cont = $('#cont');

  console.log(service, cont);

  service.on('click', function(){
    // preventDefault();
    // $('.blurb').ScrollTo();
    console.log("service");

  });

  cont.on('click', function(){
    // preventDefault();
    console.log("contact");
  });
};