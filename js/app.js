var newColor;
var color = $(".selected").css("background-color");

$(".controls").on("click", "li", function() {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
});

$("#revealColorSelect").click(function() {
  $("#colorSelect").toggle();
});

//Store color that user has made in a variable
function getNewColor () {
  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  return newColor;
}

//Update the color select field with th new color the user is making
function changeColor () {
  newColor = getNewColor();
  $("#newColor").css("background-color", newColor);
}

$("input[type=range]").change(changeColor);

//Add new color to the color controls when user clicks add button
function addColor () {
  $("ul").append("<li></li>");
  $("li").last().css("background", newColor);
  $("li").click();
}

$("#addNewColor").click(addColor);
