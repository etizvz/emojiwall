let emojis = [];
let gridSize = 40;
let emojiSize = 30;
let emojiSymbols = ["😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😶", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙅", "🙆", "🙇", "🙈", "🙉", "🙊", "🙋", "🙌", "🙍", "🙎", "🙏"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let emoji = {
        x: x,
        y: y,
        symbolIndex: floor(random(emojiSymbols.length))
      };
      emojis.push(emoji);
    }
  }
}

function draw() {
  background(255);
  
  for (let i = 0; i < emojis.length; i++) {
    let emoji = emojis[i];
    
    
    textSize(emojiSize);
    text(emojiSymbols[emoji.symbolIndex], emoji.x, emoji.y);
    
    // UPDATES - wall
    emoji.symbolIndex = (emoji.symbolIndex + 1) % emojiSymbols.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // 
  emojis = [];
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let emoji = {
        x: x,
        y: y,
        symbolIndex: floor(random(emojiSymbols.length))
      };
      emojis.push(emoji);
    }
  }
}
