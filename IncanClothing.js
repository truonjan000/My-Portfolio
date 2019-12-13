function setup(){
  createCanvas(1000, 1000);


fill("#B87810")
rect(10, 10, 50, 50, 20);
fill("#0EA20E")
rect(10, 100, 50, 50, 20);
fill("#E150F5")
rect(10, 200, 50, 50, 20);
fill("#C62400")
rect(10, 600, 50, 50, 20);
fill("#3270C8")
rect(10, 500, 50, 50, 20);
fill("#EEF63C");
rect(10, 400, 50, 50, 20);
fill("#F5980A")
rect(10, 300, 50, 50, 20);
fill("#000")
rect(300, 100, 600, 600);
fill("#fff")
rect(100, 10, 100, 100, 20);
fill("#000")
text("cut", 142, 65);
textSize(10)
}

function draw(){
  if (mouseIsPressed==true && mouseX>=10 && mouseX<=60 && mouseY>=10 && mouseY<=60){
    stroke("#B87810");
  } else if (mouseIsPressed==true && mouseX<=100 && mouseY<=200 && mouseY>=60){
    stroke("#0EA20E");
  } else if (mouseIsPressed==true && mouseX<=200 && mouseY<=250 && mouseY>=200){
      stroke("#E150F5");
  } else if (mouseIsPressed==true && mouseX<=300 && mouseY<=350 && mouseY>=250){
    stroke("#F5980A");
  } else if (mouseIsPressed==true && mouseX<=400 && mouseY<=450 && mouseY>=350){
    stroke("#EEF63C");
  }else if (mouseIsPressed==true && mouseX<=500 && mouseY<=550 && mouseY>=450){
    stroke("#3270C8");
  }else if (mouseIsPressed==true && mouseX<=600 && mouseY<=650 && mouseY>=550){
    stroke("#C62400");
  }else if (mouseIsPressed==true && mouseX<=250 && mouseX>=150 && mouseY<=110 && mouseY>=10){
  stroke("#fff");
  }

  if(mouseIsPressed==true){
    strokeWeight(20);
    point(mouseX, mouseY);
  }

  }
