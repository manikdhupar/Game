var numSquares=6;
var colors=generateRandomColors(numSquares);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var messageDisplay=document.querySelector("#message");
var colorDisplay=document.getElementById("spans");
colorDisplay.textContent=pickedColor;
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
resetButton.addEventListener("click",function(){
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  h1.style.background="steelblue";
  resetButton.textContent="New Colors";
  messageDisplay.textContent="";
  for( var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
  }


});

easy.addEventListener("click",function(){
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numSquares=3;
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  messageDisplay.textContent="";

  for( var i=0;i<squares.length;i++){

    if(colors[i]){
      squares[i].style.background=colors[i];
    }

    else {
      squares[i].style.display="none";
    }

  }


});

hard.addEventListener("click",function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquares=6;
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  messageDisplay.textContent="";

  for( var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    squares[i].style.display="block";

  }

});

for(var i=0;i<squares.length;i++){
  // ADD INITIAL COLORS TO SQUARES
  squares[i].style.background=colors[i];
  // ADD EVENT LISTENERS TO squares

  squares[i].addEventListener("click",function(){
      // CLICKED SQUARES
      var clickedColor=this.style.background;
      if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct";
        changeColors(clickedColor);
        h1.style.background=clickedColor;
        resetButton.textContent="Play Again?";
      }

      else{
        this.style.background="#232323";
        messageDisplay.textContent="Try Again!";
      }
  });
}

function changeColors(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.background=color;
  }
}

function pickColor(){
  var random=Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num ){
  var arr=[];
  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}
