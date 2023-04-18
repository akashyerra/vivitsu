let bubbles=document.getElementsByClassName("bubble");
let curs=document.querySelector(".cursor");
const audio = document.querySelector('#bubble-sound');

for(let i=0; i<bubbles.length; i++){
    bubbles[i].addEventListener("click",()=>{
        console.log("clicked");
        bubbles[i].style.display="none";
        audio.play();
        setTimeout(()=>{
            bubbles[i].style.display="flex";
        }, 1000);
        // bubbles[i].style.display="block";
    })
}

let animationBlock=document.getElementById("background-wrap")
var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 100) {
      animationBlock.style.display = "none";
    } else {
      animationBlock.style.display = "block";
    }
  };
  
  window.addEventListener("scroll", myScrollFunc);
