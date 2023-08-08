const background_path = "Fotot/Backgrounds/44841.png";
const background_image = new Image();
background_image.src = background_path;


const goku_transform_frames = [
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

const goku_idle_right_frames = [
  "Fotot/Idle_base_right/0.png",
  "Fotot/Idle_base_right/1.png"
]

const goku_idle_left_frames = [
  "Fotot/Idle_base_left/0.png",
  "Fotot/Idle_base_left/1.png"
]

const goku_walking_right_base_frames = [
  "Fotot/Walking_right_base/0.png",
  "Fotot/Walking_right_base/1.png",
  "Fotot/Walking_right_base/2.png",
  "Fotot/Walking_right_base/3.png"
]

const goku_walking_left_base_frames = [
  "Fotot/Walking_left_base/0.png",
  "Fotot/Walking_left_base/1.png",
  "Fotot/Walking_left_base/2.png",
  "Fotot/Walking_left_base/3.png"
]

const goku_jump_base_right_frames = [
  "Fotot/Jump_base_right/1.png",
  "Fotot/Jump_base_right/2.png",
  "Fotot/Jump_base_right/3.png",
  "Fotot/Jump_base_right/4.png"
]

const goku_jump_base_left_frames = [
  "Fotot/Jump_base_left/1.png",
  "Fotot/Jump_base_left/2.png",
  "Fotot/Jump_base_left/3.png",
  "Fotot/Jump_base_left/4.png"
]

const goku_attack_base_right_frames = [
  "Fotot/Attack_right/1.png",
  "Fotot/Attack_right/2.png",
  "Fotot/Attack_right/3.png",
  "Fotot/Attack_right/4.png"
]
const goku_attack_base_left_frames = [
  "Fotot/Attack_left/1.png",
  "Fotot/Attack_left/2.png",
  "Fotot/Attack_left/3.png",
  "Fotot/Attack_left/4.png"
]


const goku_teleport_base_right_frames = [
  "Fotot/Teleport_base_right/0.png",
  "Fotot/Teleport_base_right/1.png",
  "Fotot/Teleport_base_right/2.png",
  "Fotot/Teleport_base_right/3.png",
  "Fotot/Teleport_base_right/4.png"
]

const goku_teleport_base_left_frames = [
  "Fotot/Teleport_base_left/0.png",
  "Fotot/Teleport_base_left/1.png",
  "Fotot/Teleport_base_left/2.png",
  "Fotot/Teleport_base_left/3.png",
  "Fotot/Teleport_base_left/4.png"
]

const goku_disk_base_frames = [
  "Fotot/Disk/0.png",
  "Fotot/Disk/1.png",
  "Fotot/Disk/2.png",
  "Fotot/Disk/3.png",
  "Fotot/Disk/4.png",
  "Fotot/Disk/5.png"
]

const goku_idle_right_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 5]],
  animation_speed : 1,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
        player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
        return true;
      }
  }
}

const goku_idle_left_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 5]],
  animation_speed : 1,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
        player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
        return true;
      }
  }
}

const goku_transform_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [-18, 0], [-27, -42], [-27, -47], [-20, -10], [-18, -14], [-15, -18], [-28, -45], [0, -10]],
  animation_speed : 1,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed && player.this_animation.currentFrame != 8) {
      player.this_animation.currentFrame++;
      return true;
    }
  }
}

const goku_walking_right_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0], [0, 0], [0, 0]],
  animation_speed : 1,
  move : function(e){
    if (e >= 400*player.this_animation.animation_speed) {
        player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
        return true;
    }
  }
}


const goku_walking_left_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0], [0, 0], [0, 0]],
  animation_speed : 1,
  move : function(e){
    if (e >= 400*player.this_animation.animation_speed) {
        player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
        return true;
    }
  }
}

const goku_jump_base_right_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0],[0, 0], [0, 0]],
  animation_speed : 0.85,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
      player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
      return true;
    }
  }
}

const goku_jump_base_left_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0],[0, 0], [0, 0]],
  animation_speed : 0.85,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
      player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
      console.log(keys.w.pressed);
      return true;
    }
  }
}


const goku_attack_base_right_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 5],[0, 5], [0, 5], [0, 5]],
  animation_speed : 0.8,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
      player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
      if (keys.j.pressed == false) {
        player.this_animation = goku_idle_right_animation;
      }
      return true;
    }
  }
}

const goku_attack_base_left_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[-10, 5],[-5, 5], [-10, 5], [-5, 5]],
  animation_speed : 0.8,
  move : function(e) {
    if (e >= 400*player.this_animation.animation_speed) {
      player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
      if (keys.j.pressed == false) {
        player.this_animation = goku_idle_left_animation;
      }
      return true;
    }
  }
}

const goku_teleport_base_right_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0],[0, 0], [600, 0],[0, 0]],
  animation_speed : 0.5,
  move : function(e) {
    if (e >= 400*this.animation_speed) {
      player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
      if (player.this_animation.currentFrame == player.this_animation.frames.length-1){
        let temp = player.position.x + 600;
        if (temp < canvas.width){
          player.position.x += 600;
        }else {
          player.position.x = canvas.width-50;
        }
        player.this_animation = goku_idle_right_animation;
      }
      return true;
  }
  }
}

const goku_teleport_base_left_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0],[0, 0], [-600, 0],[0, 0]],
  animation_speed : 0.5,
  move : function(e) {
    if (e >= 400*this.animation_speed) {
      player.this_animation.currentFrame = (player.this_animation.currentFrame+1)%player.this_animation.frames.length;
      if (player.this_animation.currentFrame == player.this_animation.frames.length-1){
        let temp = player.position.x - 600;
        if (temp > 0){
          player.position.x -= 600;
        }else {
          player.position.x = 0;
        }
        player.this_animation = goku_idle_left_animation;
      }
      return true;
  }
  }
}

const goku_disk_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[-21, -10], [-27, -10],[0, 10], [0, 5],[0, 0], [0, 0]],
  animation_speed : 1,
  move : function(e) {
    
    if (e >= 400 * player.this_animation.animation_speed && (player.this_animation.currentFrame <= 3)){
      // console.log(player.this_animation.currentFrame);
      
      if (player.this_animation.currentFrame == 3){
        player.this_animation.currentFrame = 0;
        player.this_animation = goku_idle_right_animation;
        return true;
      }
      
      player.this_animation.currentFrame++;
      return true;
    }
  }
}

const all_sprites = [
  goku_idle_right_frames,
  goku_idle_left_frames,
  goku_transform_frames, 
  goku_walking_right_base_frames,
  goku_walking_left_base_frames, 
  goku_jump_base_right_frames,
  goku_jump_base_left_frames,
  goku_attack_base_right_frames,
  goku_attack_base_left_frames,
  goku_teleport_base_right_frames,
  goku_teleport_base_left_frames,
  goku_disk_base_frames
];
const all_animations = [
  goku_idle_right_animation,
  goku_idle_left_animation, 
  goku_transform_animation, 
  goku_walking_right_base_animation,
  goku_walking_left_base_animation, 
  goku_jump_base_right_animation,
  goku_jump_base_left_animation,
  goku_attack_base_right_animation,
  goku_attack_base_left_animation,
  goku_teleport_base_right_animation,
  goku_teleport_base_left_animation,
  goku_disk_base_animation
];
