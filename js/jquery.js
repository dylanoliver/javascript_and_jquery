$(document).ready(function(){

  for (var i = 0; i < 50; i++) {
    for (var j = 0; j < 50; j++) {
      $(".container").append("<div></div>");
    }
  }

  $(".container > div").mouseover(function() {
    $(this).addClass('selected');
  });

  $('button').on('click', function(){
    $(".container > div").removeClass();
  })

});
