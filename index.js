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

  let panelId = $(this).attr("id") + "Panel";
  $("#" + panelId).toggleClass("hidden");

  //show the active panel when we select any
  let numberOfActivePanels = 4 - $(".hidden").length;
  $(".panel").width(($(window).width()/numberOfActivePanels) - 15);

});

//panel - fixing height and width
$(".panel").height($(window).height() - $("#header").height() -20);
$(".panel").width(($(window).width()/2) - 15);

//updating output
updateOutput();
$("textarea").on("change keyup paste", function() {
  updateOutput();
})

//update output function
function updateOutput() {
  $("iframe").contents().find("html").html(
    "<html>"+
      "<head>"+
        "<style type='text/css'>"+
          $("#cssPanel").val()+
        "</style>"+
        "</head>"+
        "<body>"+
          $("#htmlPanel").val()+
        "</body>"+
    "</html>"
  );
  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}