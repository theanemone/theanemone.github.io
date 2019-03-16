const wrapper=document.querySelector(".hamburger");
const container=document.querySelector(".maincontainer");

wrapper.addEventListener("click",function(){

    if(wrapper.classList.contains("active"))
    {
        container.removeChild(document.querySelector(".menu-panel"));
    }
    else{
        const menu=document.createElement("div");
        menu.classList.add("menu-panel");
        console.log(menu);
        container.appendChild(menu);
    }


this.classList.toggle("active");
});