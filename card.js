$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });




let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let l5 = document.getElementById("l5");
let l6 = document.getElementById("l6");
let l7 = document.getElementById("l7");
let l8 = document.getElementById("l8");

let ps1 = document.getElementById("ps1");
let ps2 = document.getElementById("ps2");
let ps3 = document.getElementById("ps3");
let ps4 = document.getElementById("ps4");
let ps5 = document.getElementById("ps5");
let ps6 = document.getElementById("ps6");
let ps7 = document.getElementById("ps7");
let ps8  = document.getElementById("ps8");

l1.addEventListener("click",()=>{
  ps1.click();
});
l2.addEventListener("click",()=>{
  ps2.click();
});

l3.addEventListener("click",()=>{
  ps3.click();
});

l4.addEventListener("click",()=>{
  ps4.click();
});

l5.addEventListener("click",()=>{
  ps5.click();
});

l6.addEventListener("click",()=>{
  ps6.click();
});
l7.addEventListener("click",()=>{
  ps7.click();
});

l8.addEventListener("click",()=>{
  ps8.click();
});





  