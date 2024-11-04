const canvas = document.getElementById('rainAnimation'); 
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

// Raindrops
const rainNUMBER = 30; 
const Drops = []; 

//raindrops are random!!!
//same speed but random length to seem more dynamic
function createRaindrops() {
    for (let i = 0; i < rainNUMBER; i++) { 
        Drops.push({ x: Math.random() * canvas.width,
                      y: Math.random() * canvas.height,
                      speed: 10, length: Math.random() * 8 + 10 }); 
    }
}

function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.strokeStyle = 'red'; 
    ctx.lineWidth = 1; 
    Drops.forEach(drop => { 
        ctx.beginPath(); 
        ctx.moveTo(drop.x, drop.y); 
        ctx.lineTo(drop.x, drop.y + drop.length); 
        ctx.stroke(); 
        drop.y += drop.speed; 
        if (drop.y > canvas.height) { 
            drop.y = -drop.length; 
            drop.x = Math.random() * canvas.width; 
        } 
    });
}

function animateRain() { 
    drawRaindrops(); 
    requestAnimationFrame(animateRain); 
}

createRaindrops(); 
animateRain(); 

//so if the window is resized it moves
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
    Drops.length = 0; 
    createRaindrops(); 
});
