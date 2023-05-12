var btn = document.getElementById("go-button");

function buttonClicked(){
  console.log("Button clicked");
  btn.removeEventListener("click", buttonClicked);
  document.getElementById("text");
  for(var i=0 ; i<10 ; i++){
    console.log("Current i value is", i);
    alert(i)
  }
}
btn.addEventListener("click", buttonClicked);
