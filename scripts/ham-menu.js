const mainmenu=document.querySelector(".menu");
const wrapper=document.querySelector(".hamburger");
const container=document.querySelector(".maincontainer");

$("document").ready(function(){
    $(".menu-panel").slideToggle();
});
mainmenu.addEventListener("click",function(){

    if(wrapper.classList.contains("active"))
    {
     
        // container.removeChild(document.querySelector(".menu-panel"));        
        $(".menu").css("background-color","#bbb");
        $(".hamburger span").css("background-color","#222");
        $(".menu").css("border-color","#333333")
        $(".menu").css("box-shadow","0 0 0 2px #bbb")
       
    }
    else{
        // const menu=document.createElement("div");
        // menu.classList.add("menu-panel");
        // container.appendChild(menu);
        $(".menu").css("background-color","#222");
        $(".hamburger span").css("background-color","#bbb");
        $(".menu").css("border-color","#bbbbbb")
        $(".menu").css("box-shadow","0 0 0 2px #222")
     
    }
    $(".menu-panel").slideToggle();
wrapper.classList.toggle("active");
});