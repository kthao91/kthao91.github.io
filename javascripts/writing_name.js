var i = 0;
var txt = 'Koua Thao';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
