document.addEventListener("DOMContentLoaded", function() {
    var coins = document.getElementsByClassName("coin");
    
    let count=0;
    for(let i=0; i<coins.length; i++){
        coins[i].addEventListener("mouseenter", ()=>{
            if(count==0){
                coins[i].classList.remove("heads", "tails");
                setTimeout(function() {
                    coins[i].classList.add("heads");
                    console.log("it is head");
                }, 500);
                count+=1;
            }
        });
        // count=0;
        coins[i].addEventListener("mouseleave", ()=>{
            count=0;
        });
    }
  });
  