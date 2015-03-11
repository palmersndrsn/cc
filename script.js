window.onload = function(){
  var comp = $('#comp');
  var cont = $('#cont');

  console.log(comp, cont);

  comp.on('click', function(){
    // preventDefault();
    $('.blurb').ScrollTo();
    console.log("company");

  });

  cont.on('click', function(){
    // preventDefault();
    console.log("contact");
  });
};