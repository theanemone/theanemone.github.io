const panels = $(".headeranim");
const kacperheader = $(".kheader");
const patrickheader = $(".pheader");
function menter(object,anim)
{
  object.css("color", "rgb(39, 39, 39)");
  object.css("cursor", "pointer");
  object.css("text-shadow", "none");
  object.css("transform", "translate(1vw, -.5vw)");
  
 anim.css("transform", "translate(1vw, -.5vw)");
 anim.css("width", "60%");
 anim.css("box-shadow", ".15vw .15vw black");
}
function mleave(object,anim)
{
  object.css("color", "white");
  object.css("text-shadow", ".12vw .12vw black");
  object.css("transform", "translate(0)");
  anim.css("transform", "translate(0)");
  anim.css("width", "0");
  anim.css("box-shadow", "none");
}
$(patrickheader).mouseenter(function () {
  menter(patrickheader,$("#headeranimleft"));

}).mouseleave(function () {
  mleave(patrickheader,$("#headeranimleft"));
});

kacperheader.mouseenter(function () {
 menter(kacperheader,$("#headeranimright"));
 
}).mouseleave(function () {
  mleave(kacperheader,$("#headeranimright"));
});