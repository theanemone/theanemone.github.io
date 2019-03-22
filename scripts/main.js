const panels = $(".headeranim");
const kacperheader = $(".kheader");
const patrickheader = $(".pheader");
function mouseevents(object,anim,color,cursor,textshadow,transform1,transform2,width,boxshadow)
{
  object.css("color", `${color}`);
  object.css("cursor", `${cursor}`);
  object.css("text-shadow", `${textshadow}`);
  object.css("transform", `${transform1}`);
  anim.css("transform", `${transform2}`);
  anim.css("width", `${width}`);
  anim.css("box-shadow", `${boxshadow}`);
}

$(patrickheader).mouseenter(function () {
  mouseevents(patrickheader,$("#headeranimleft"),"rgb(39, 39, 39)","pointer","none","translate(1vw, -.5vw)","translate(1vw, -.5vw)","60%",".15vw .15vw black");

}).mouseleave(function () {
  mouseevents(patrickheader,$("#headeranimleft"),"white","default",".12vw .12vw black","translate(0)","translate(0)","0","none");
});

kacperheader.mouseenter(function () {
  mouseevents(kacperheader,$("#headeranimright"),"rgb(39, 39, 39)","pointer","none","translate(1vw, -.5vw)","translate(1vw, -.5vw)","60%",".15vw .15vw black");

 
}).mouseleave(function () {
 
  mouseevents(kacperheader,$("#headeranimright"),"white","default",".12vw .12vw black","translate(0)","translate(0)","0","none");
});



$(window).resize(function(){
  if(window.innerWidth>600)
  {
   
    $(".leftpolygon").css("display","block");
    $(".rightpolygon").css("display","block");
    $(".leftpolygon").css("clip-path","polygon(0 0, 55% 0, 100% 100%, 0 100%)");
    $(".rightpolygon").css("clip-path","polygon(55% 0, 100% 0%, 100% 100%, 45% 100%)");
    console.log("hejo");
  }
else if(window.innerWidth<=600)
{

    $(".leftpolygon").css("display","block");
    $(".rightpolygon").css("display","none");
    $(".patrictile").css("display","block");
    $(".kacpertile").css("display","none");
    $(".fa-angle-right").css("transform","rotate(0deg)");

 
  
  $(".leftpolygon").css("clip-path","none");
  $(".rightpolygon").css("clip-path","none");

  
}
});
$(".fa-angle-right").click(function(){

  
  if($(".kacpertile").css('display') == 'none')
  {
    $(".patricktile").css("display","none");
    $(".kacpertile").css("display","block");
    $(".fa-angle-right").css("transform","rotate(180deg)");
  }
   else if($(".patricktile").css('display') == 'none')
  {
    $(".kacpertile").css("display","none");
    $(".patricktile").css("display","block");
    $(".fa-angle-right").css("transform","rotate(0deg)");
  }
});