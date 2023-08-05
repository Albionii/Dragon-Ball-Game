const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d'); 

canvas.width = 1024;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height); 
const gravity = 0.2;
class Sprite {
  constructor({position, velocity}){
     this.position = position;
     this.velocity = velocity;
     this.height = 150;
     this.lastKey;
  }
  
  draw(){
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update(){
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y >= canvas.height){
      this.velocity.y = 0;
    }
    else {
      this.velocity.y += gravity;
    }
  }
}

const player = new Sprite({
  position: {
    x : 0,
    y : 0
  },
  velocity: {
    x : 0,
    y : 0
  }
});

const enemy = new Sprite({
  position: {
    x : 400,
    y : 100
  },
  velocity: {
    x : 0,
    y : 0
  }

});


const keys = {
  a : {
    pressed: false
  },
  d : {
    pressed: false
  },
  w : {
    pressed: false
  },

  // Enemy keys

  ArrowLeft : {
    pressed : false
  },
  ArrowRight : {
    pressed : false
  },
  ArrowUp : {
    pressed : false
  }
}
function animate(){
  window.requestAnimationFrame(animate);
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  if (keys.a.pressed && player.lastKey === 'a'){
    player.velocity.x = -1;
  }else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 1;
  }

  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
    enemy.velocity.x = -1;
  }else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 1;
  }

}

animate(); 



window.addEventListener('keydown', (event) => {
  switch(event.key){
    case 'd' :
      keys.d.pressed = true;
      player.lastKey = 'd';
      break;
    case 'a' : 
      keys.a.pressed = true;
      player.lastKey = 'a';
      break;
    case 'w' : 
      player.velocity.y = -10;
      break;

    // Enemy keys
    case 'ArrowLeft' : 
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = 'ArrowLeft';
      break;
    case 'ArrowRight' : 
      keys.ArrowRight.pressed = true;
      enemy.lastKey = 'ArrowRight';
      break;
    
    case 'ArrowUp' : 
      enemy.velocity.y = -10;
      break;
    
  }
  document.getElementById("text").innerHTML = event.key;
});




window.addEventListener('keyup', (event) => {
  switch(event.key){
    case 'd' :
      keys.d.pressed = false;
    break;
    case 'a' : 
      keys.a.pressed = false;
    break;
    case 'w' : 
      keys.w.pressed = true;
    break;
    
    //Enemy keys
    case 'ArrowLeft' : 
      keys.ArrowLeft.pressed = false;
      break;
    case 'ArrowRight' : 
      keys.ArrowRight.pressed = false;
      break;
  }
});