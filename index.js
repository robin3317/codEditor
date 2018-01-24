//hover the button - handlerIn and handlerOut
/*addClass and removeClass works when we hover, and after hover out it will remain the 
previous style.*/
$(".toggleButton").hover(function() {
  $(this).addClass("highlightedButton");
}, function() {
  $(this).removeClass("highlightedButton");
});

//toggleClass help to select and deselect our button
$(".toggleButton").click(function() {
  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");
});