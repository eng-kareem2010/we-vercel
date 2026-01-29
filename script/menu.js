const menuBtn = document.querySelector("#menu");
const navBar=document.querySelector("#nav_ul");
let index=0;
function drop_up(){
    if(index===0){
        navBar.style.display="flex";
        index=1;
    }else if(index>0){
        navBar.style.display="none";
        index=0;
    }
}
menuBtn.addEventListener("click",drop_up
    
)