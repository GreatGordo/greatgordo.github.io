function openNav() {
  let nav = document.getElementById("nav");
  if (nav.offsetHeight == 52){
    document.getElementById("nav").style.height = "174px";
    document.getElementById("button").innerHTML = "&times;";
  }
  else{
    document.getElementById("nav").style.height = "0px";
    document.getElementById("button").innerHTML = "&equiv;";
  }
}

let buttonPress = 0;

function goDown(){
  buttonPress += 1;
  document.getElementById("para").classList.add("move");
  let down = 80 * buttonPress;
  document.getElementById("para").style.transform = "translate(0,-" + down + "px)"
}

function goUp(){
  document.getElementById("para").style.transform = "translate(0,0)";
  document.getElementById("para").classList.remove("move");
  buttonPress = 0;
}
