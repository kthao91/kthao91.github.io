const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*'+
'()_+~`|}{[]\:;?><,./-=あかがさざただなはばぱまやらわいきぎしじちぢにひびぴみりをうくぐすずつづぬふぶぷむゆるんえけ'+
'げせぜてでねへべぺめれおこごそぞとどのほぼぽもよろ';
const fontSize = 10;
const columns = canvas.width / fontSize;

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
    ctx.fillText(first, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0; // Reset the drop to the top
    }
    drops[i]++;
  }
}

setInterval(draw, 33); // Adjust the speed here