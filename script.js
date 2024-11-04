const canvas = document.getElementById('rainAnimation'); 
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

// Raindrops
const rainNUMBER = 20; 
const Drops = []; 

//raindrops are random!!!
function createRaindrops() {
    for (let i = 0; i < rainNUMBER; i++) { 
        Drops.push({ x: Math.random() * canvas.width,
                      y: Math.random() * canvas.height,
                      speed: Math.random() * 3 + 2,
                      length: Math.random() * 20 + 10 }); 
    }
}

function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.strokeStyle = 'red'; 
    ctx.lineWidth = 2; 
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
