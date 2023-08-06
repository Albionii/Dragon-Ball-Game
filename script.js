const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d'); 

canvas.width = 1024;
canvas.height = 576;

const background_path = "Fotot/Backgrounds/44841.png";
const background_image = new Image();
background_image.src = background_path;


const goku_boxing_frames = [
  "Fotot/Transform/0.png",
  "Fotot/Transform/1.png",
  "Fotot/Transform/2.png",
  "Fotot/Transform/3.png",
  "Fotot/Transform/4.png",
  "Fotot/Transform/5.png",
  "Fotot/Transform/6.png",
  "Fotot/Transform/7.png",
  "Fotot/Transform/8.png"
]

const goku_idle_frames = [
  "Fotot/Idle_base/0.png",
  "Fotot/Idle_base/1.png"
]

const goku_walking_base_frames = [
  "Fotot/Walking_base/0.png",
  "Fotot/Walking_base/1.png",
  "Fotot/Walking_base/2.png"
]

const goku_idle_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 5]]
}

const goku_boxing_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [-18, 0], [-27, -42], [-27, -47], [-20, -10], [-18, -14], [-15, -18], [-28, -45], [0, -10]]
}

const goku_walking_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0], [0, 0]]
}

const all_sprites = [goku_idle_frames, goku_boxing_frames, goku_walking_base_frames];
const all_animations = [goku_idle_animation, goku_boxing_animation, goku_walking_base_animation];
// let this_animation = goku_idle_animation;

function preloadImages() {
  let loadedImages = 0;

  for (let j = 0; j < all_sprites.length; j++){
    for (let i = 0; i < all_sprites[j].length; i++) {
      const img = new Image();
      img.src = all_sprites[j][i];
      img.onload = () => {
          loadedImages++;
      };
      all_animations[j].frames.push(img);
  }
  }

  
  background_image.onload = () => {
    context.drawImage(background_image, 0, 0, canvas.width, canvas.height);
  }
}


const gravity = 0.2;
let previousTime = performance.now();

class Sprite {
  constructor({position, velocity}){
     this.position = position;
     this.velocity = velocity;
     this.height = 150;
     this.lastKey;
     this.this_animation = goku_idle_animation;
  }
  
  draw(){
    context.drawImage(background_image, 0, 0, canvas.width, canvas.height);
  }



  update(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.draw();

    if (player.this_animation.currentFrame <= player.this_animation.frames.length){

      const currentFrameImage = player.this_animation.frames[player.this_animation.currentFrame];
      context.drawImage(currentFrameImage, player.position.x + player.this_animation.changePos[player.this_animation.currentFrame][0], player.position.y+player.this_animation.changePos[player.this_animation.currentFrame][1], 1.5*currentFrameImage.width, 1.5*currentFrameImage.height);
  
      const now = performance.now();
      const elapsedTime = now - previousTime;
      if (elapsedTime >= 400) {
        player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
        previousTime = now;
      }


    }

    

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
  
  player.update();

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
  
  window.requestAnimationFrame(animate);
  
}

// animate(); 

window.addEventListener('keydown', (event) => {
  switch(event.key){
    case 'd' :
      keys.d.pressed = true;
      player.lastKey = 'd';
      player.this_animation = goku_walking_base_animation;
      break;
    case 'a' : 
      keys.a.pressed = true;
      player.lastKey = 'a';
      break;
    case 'w' : 
      player.velocity.y = -10;
      break;

    case 't':
      player.this_animation = goku_boxing_animation;
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
  // document.getElementById("text").innerHTML = event.key;
});




window.addEventListener('keyup', (event) => {
  switch(event.key){
    case 'd' :
      keys.d.pressed = false;
      player.this_animation = goku_idle_animation;
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

preloadImages();
animate();