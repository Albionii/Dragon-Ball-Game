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

const goku_walking_right_base_frames = [
  "Fotot/Walking_right_base/0.png",
  "Fotot/Walking_right_base/1.png",
  "Fotot/Walking_right_base/2.png"
]

const goku_walking_left_base_frames = [
  "Fotot/Walking_left_base/0.png",
  "Fotot/Walking_left_base/1.png",
  "Fotot/Walking_left_base/2.png"
]

const goku_jump_base_frames = [
  "Fotot/Jump_base/1.png",
  "Fotot/Jump_base/2.png",
  "Fotot/Jump_base/3.png",
  "Fotot/Jump_base/4.png",
  "Fotot/Jump_base/5.png"
]

const goku_idle_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 5]],
  animation_speed : 1
}

const goku_boxing_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [-18, 0], [-27, -42], [-27, -47], [-20, -10], [-18, -14], [-15, -18], [-28, -45], [0, -10]],
  animation_speed : 1
}

const goku_walking_right_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0], [0, 0]],
  animation_speed : 1
}


const goku_walking_left_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0], [0, 0]],
  animation_speed : 1
}

const goku_jump_base_animation = {
  frames: [],
  currentFrame: 0,
  changePos:  [[0, 0], [0, 0],[0, 0], [0, 0], [0, 0]],
  animation_speed : 1.05
}

const all_sprites = [
  goku_idle_frames,
  goku_boxing_frames, 
  goku_walking_right_base_frames,
  goku_walking_left_base_frames, 
  goku_jump_base_frames
];
const all_animations = [
  goku_idle_animation, 
  goku_boxing_animation, 
  goku_walking_right_base_animation,
  goku_walking_left_base_animation, 
  goku_jump_base_animation
];
