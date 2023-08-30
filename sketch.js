let img
let col

function preload(){
  img = loadImage("Cat.jpeg")
}

function setup() {
  createCanvas(img.width, img.height);
  noStroke()
  image(img,0,0)

}

function draw() {
  
  for(let i = 0; i < 1000; i++){
    
  let x = random(width)
  let y = random(height)
  col = get(x,y)
  fill(col)
  circle(x,y,10)
  }
}