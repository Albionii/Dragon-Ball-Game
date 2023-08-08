const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d'); 

canvas.width = 1024;
canvas.height = 576;


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


const gravity = 0.25;
let previousTime = performance.now();

class Sprite {
  constructor({position, velocity}){
     this.position = position;
     this.velocity = velocity;
     this.height = 120;
     this.lastKey;
     this.this_animation = goku_idle_right_animation;
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
      if (player.this_animation.move(elapsedTime)){
        previousTime = now;
      }  
    }

    

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y >= canvas.height){
      this.velocity.y = 0;
      if (keys.w.pressed) {
        player.this_animation.currentFrame = 0;
        if (keys.a.pressed) {
          player.this_animation = goku_walking_left_base_animation;
        }else if (keys.d.pressed){
          player.this_animation = goku_walking_right_base_animation
        }else {
          player.this_animation = goku_idle_right_animation;
        }
        keys.w.pressed = false;        
      }
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
  j : {
    pressed: false
  },
  o : {
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
    player.velocity.x = -2.5;
  }else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 2.5;
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
      if (keys.w.pressed == false){
        player.this_animation = goku_walking_right_base_animation;
      }
      moveInterrupted();
      break;
    case 'a' : 
      keys.a.pressed = true;
      player.lastKey = 'a';
      if (keys.w.pressed == false){
        player.this_animation = goku_walking_left_base_animation;
      }
      moveInterrupted();
      break;
    case 'w' : 
      if (keys.w.pressed == false){
        keys.w.pressed = true;
        player.velocity.y = -10;
        if (ifMovingLeft()){
          player.this_animation = goku_jump_base_left_animation;  
        }else {
          player.this_animation = goku_jump_base_right_animation;  
        }
        
      }
      break;


    // Transform
    case 't':
      player.this_animation = goku_transform_animation;
      break;

    //Attack
    case 'j': 
      keys.j.pressed = true;
      if (ifMovingLeft()){
        player.this_animation = goku_attack_base_left_animation;
      }else {
        player.this_animation = goku_attack_base_right_animation;
      }
      break;

    case 'i':
      player.this_animation = goku_teleport_base_animation;
      break;

    case 'o': {
      player.this_animation = goku_disk_base_animation;
      break;
    }



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
});




window.addEventListener('keyup', (event) => {
  switch(event.key){
    case 'd' :
      keys.d.pressed = false;
      if (keys.a.pressed){
        if (keys.w.pressed == false){
          player.this_animation = goku_walking_left_base_animation;
        }
        player.lastKey = 'a';
        break;
      }
      player.this_animation = goku_idle_right_animation;
    break;
    case 'a' : 
      keys.a.pressed = false;
      if (keys.d.pressed){
        if (keys.w.pressed == false){
          player.this_animation = goku_walking_right_base_animation;
        }
        player.lastKey = 'd';
        break;
      }
      player.this_animation = goku_idle_left_animation;
    break;
    case 'w' : 
      // keys.w.pressed = false;
    break;

    case 'j' : 
      keys.j.pressed = false;
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


function moveInterrupted(){
  goku_teleport_base_animation.currentFrame = 0;
  goku_transform_animation.currentFrame = 0;
  goku_disk_base_animation.currentFrame = 0;
}

function ifMovingLeft(){
  return  keys.a.pressed || 
          player.this_animation == goku_idle_left_animation ||
          player.this_animation == goku_attack_base_left_animation ||
          player.this_animation == goku_walking_left_base_animation ||
          player.this_animation == goku_jump_base_left_animation; 
}
function ifMovingRight(){
  return  keys.d.pressed || 
          player.this_animation == goku_idle_right_animation ||
          player.this_animation == goku_attack_base_right_animation ||
          player.this_animation == goku_walking_right_base_animation ||
          player.this_animation == goku_jump_base_right_animation; 
}



preloadImages();
animate();