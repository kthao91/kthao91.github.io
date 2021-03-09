function buttonAction(displayed) {
    let detail = document.getElementsByClassName("detail");
    for (var i = 0; i < detail.length; i++) {
        let className = detail[i].className.split(" ")[1];
        if (className != "display_none" && className == "display") {
            detail[i].classList.remove("display");
            detail[i].classList.add("display_none");
        }
    }
    let displayElement = document.getElementById(displayed);
    displayElement.classList.remove("display_none");
    displayElement.classList.add("display");
    displayElement = document.getElementById(displayed);
    window.scrollTo(0, screen.height);
}