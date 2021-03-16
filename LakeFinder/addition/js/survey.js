var doc = document.getElementById("survey");

function grabInfo(lake) {
    console.log(lake);

    doc.innerHTML += "<iframe is='x-frame-bypass' src='https://www.dnr.state.mn.us/lakefind/showreport.html?downum=01004000'></iframe>"
    doc.classList.remove("display_none");
    doc.classList.add("display");
}

function closeSurvey() {
    doc.classList.remove("display");
    doc.classList.add("display_none");
}