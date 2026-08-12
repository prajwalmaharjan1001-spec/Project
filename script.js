var button= document.getElementById("close");
var blueBox= document.getElementById("blue-box");
var bookButton = document.querySelectorAll(".book");


button.addEventListener("click",(e)=>{
    blueBox.style.display="none"
    
});



bookButton.forEach(btn=>{
btn.addEventListener("click",(e)=>{
    blueBox.style.display="block"
    
})
})