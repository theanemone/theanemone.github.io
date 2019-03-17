const panels = $(".headeranim");
const kacperheader = $(".kheader");
const patrickheader = $(".pheader");

$(patrickheader).mouseenter(function () {
  $(patrickheader).css("color", "rgb(39, 39, 39)");
  $(patrickheader).css("cursor", "pointer");
  $(patrickheader).css("text-shadow", "none");
  $(patrickheader).css("transform", "translate(1vw, -.5vw)");
  $("#headeranimleft").css("transform", "translate(1vw, -.5vw)");
  $("#headeranimleft").css("width", "60%");
  $("#headeranimleft").css("box-shadow", ".15vw .15vw black");

}).mouseleave(function () {
  $(patrickheader).css("color", "white");
  $(patrickheader).css("text-shadow", ".12vw .12vw black");
  $(patrickheader).css("transform", "translate(0)");
  $("#headeranimleft").css("transform", "translate(0)");
  $("#headeranimleft").css("width", "0");
  $("#headeranimleft").css("box-shadow", "none");
});

kacperheader.mouseenter(function () {
  kacperheader.css("color", "rgb(39, 39, 39)");
  kacperheader.css("cursor", "pointer");
  kacperheader.css("text-shadow", "none");
  kacperheader.css("transform", "translate(1vw, -.5vw)");
  $("#headeranimright").css("transform", "translate(1vw, -.5vw)");
  $("#headeranimright").css("width", "60%");
  $("#headeranimright").css("box-shadow", ".15vw .15vw black");

}).mouseleave(function () {
  kacperheader.css("color", "white");
  kacperheader.css("text-shadow", ".12vw .12vw black");
  kacperheader.css("transform", "translate(0)");
  $("#headeranimright").css("transform", "translate(0)");
  $("#headeranimright").css("width", "0");
  $("#headeranimright").css("box-shadow", "none");
});