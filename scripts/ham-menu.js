const wrapper=document.querySelector(".hamburger");
const container=document.querySelector(".maincontainer");

wrapper.addEventListener("click",function(){

    if(wrapper.classList.contains("active"))
    {
        container.removeChild(document.querySelector(".menu-panel"));        
        $(".menu").css("background-color","#bbb");
        $(".hamburger span").css("background-color","#333");
    }
    else{
        const menu=document.createElement("div");
        menu.classList.add("menu-panel");
        console.log(menu);
        container.appendChild(menu);
        $(".menu").css("background-color","#222");
        $(".hamburger span").css("background-color","#bbb");
     
    }

this.classList.toggle("active");
});