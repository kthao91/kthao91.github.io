
/*
Javascript to hide all the side in the side show
*/
var showSide = 0;
showSides(showSide);
var s = document.getElementsByClassName("slide");


//hide all side execpt the first one
for(i = 0; i<s.length; i++){
    if(i!=0){
        s[i].style.display = "none";
    }   
}

function nextSide(n) {
    showSides(showSide += n);
  }

function showSides(n){
    let i;
    let x = document.getElementsByClassName("slide");
    let p = document.getElementsByClassName("panel");
    if(n<=0){
        n=x.length;
        showSide=x.length;
    }

    if(n>x.length-1){
        n=0;
        showSide=0;
    }

    for(i = 0; i<x.length; i++){
        x[i].style.display = "none";

        if(n == 1){
            x[1].removeAttribute("style");

        } 
        else if(n==i){
            x[n].style.display = "block";
        }

        

}
}

function getSide(n){
    showSides(n);
}





