var d = document.getElementsByClassName("workEdu")
d[1].style.display = "none";



function hide(s){
    console.log(s)
    if(s.localeCompare('edu') == 0){
        d[1].style.display = "none";
        d[0].style.display = "block";
        d[0].classList.add('active');
        d[1].classList.remove('active');
    }
    else if(s.localeCompare('work') == 0) {
        d[0].style.display = "none";
        d[1].style.display = "block";
        d[1].classList.add('active');
        d[0].classList.remove('active');
    }
}