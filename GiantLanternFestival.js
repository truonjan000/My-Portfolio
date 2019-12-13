var stars;
function setup(){
  createCanvas(1000, 1000);
  background("#0F2783")

  for (var countRows = 0; countRows < 10; countRows++){
    for (var countBlocks = 0; countBlocks < 10; countBlocks++) {
      ellipse(10+(countRows*100)+40,155+(countBlocks*100)-100,5,5);
  }
  }
  fill("#fff")
  ellipse (500, 500, 500, 500);


  fill("#DC340E")
  rect(0, 0, 150, 150, 20);
  fill("#F1DD1C")
  rect(850, 0, 150, 150, 20);
  fill("#BE8BE8")
  rect(200, 0, 150, 150, 20);
  fill("#8BE891");
  rect(400, 0, 150, 150, 20);
  fill("#000")
  rect(600, 0, 150, 150, 20);
}

function draw(){
if (mouseIsPressed==true && mouseX<=150 && mouseY<=150){
  stroke("#DC340E");
} else if (mouseIsPressed==true && mouseX>=850 && mouseY<=150){
  stroke("#F1DD1C");
} else if (mouseIsPressed==true && mouseX>=600 && mouseY<=150){
    stroke("#000");
} else if (mouseIsPressed==true && mouseX>=400 && mouseY<=150){
  stroke("#8BE891");
} else if (mouseIsPressed==true && mouseX>=200 && mouseY<=150){
  stroke("#BE8BE8");
}

if(mouseIsPressed==true){
  strokeWeight(30);
  point(mouseX, mouseY);
}

}
