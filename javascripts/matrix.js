const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
let isPaused = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*'+
'()_+~`|}{[]\:;?><,./-=あかがさざただなはばぱまやらわいきぎしじちぢにひびぴみりをうくぐすずつづぬふぶぷむゆるんえけ'+
'げせぜてでねへべぺめれおこごそぞとどのほぼぽもよろ';
const fontSize = 10;
const columns = canvas.width / fontSize;

const img = new Image();
img.src = "img/BSOD2.png";

const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1; // Initialize each drop to start at the top
}


function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Creates a trailing effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // Green text color
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0; // Reset the drop to the top
    }
    drops[i]++;
  }
}

function pauseInterval() {
  isPaused = true;
}

function startInterval() {
  intervalId = setInterval(() => {
    if (!isPaused) {

      draw();

    }
  }, 33); 
}

function filled(){

  ctx.drawImage(img,0,0,canvas.width,canvas.height);

}

function reset() {

  let width = canvas.width;
  let height = canvas.height;
  let x = width/2;
  let y = height/2;
  let speed = 2;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, width, height);

    width -= speed * 2;
    height -= speed * 2;

    //stop so it expending negativly
    if (width <= 0 || height <= 0) {
      x = 0;
      y = 0;
      console.log("loop")
    }

    else{
      x = 0;
      y = 0;
    requestAnimationFrame(draw);
    
    }
    console.log("end")


  }
  draw();
  console.log("done")
}

function reboot(){
  function draw(){ 
    ctx.fillStyle = '#000';
    console.log("reboot");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function seeName(){
  let name = document.getElementsByClassName("nothing");
  console.log(name);
  name[0].classList.toggle("show");

}

function type(){
  let typed = new Typed('#name', {
    strings: ['Koua Thao'],
    typeSpeed: 50,
    showCursor: false,

    });

  let type2 = new Typed('#title',{
    startDelay: 1000,
    strings:['sort of Hacker','Software Engineer', 'Web Master',
      'Pixel Artist', 'Game Designer', 'Graphic Designer', 'Full Stack Devloper'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,

  }

  )
}

startInterval();
setTimeout(pauseInterval, 15000);
setTimeout(filled,17000);
setTimeout(reset,18000);
setTimeout(reboot,22000);
setTimeout(seeName,23000);
setTimeout(type,24000);