var showSide = 0;
showSides(showSide);


var s = document.getElementsByClassName("projects");
console.log(s.length +" not suppose to b e 0" );

for(i = 0; i<s.length; i++){
    console.log(i);
    if(i!=0){
    s[i].style.display = "none";
    }
}

function nextSide(n) {
    showSides(showSide += n);
  }

function showSides(n){
    var i;
    var x = document.getElementsByClassName("projects");
    if(n>x.length){showSide=0}

    for(i = 0; i<x.length; i++){
        x[i].style.display = "none";
        if(n==i){
            x[n].style.display = "block";
        }
    }
     
}





