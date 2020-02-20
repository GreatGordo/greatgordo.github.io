function navMenu(){
  var x = document.getElementById("nav-short-screen");
  if (x.offsetHeight == "0"){
    x.style.height = "auto";
  }
  else{
    x.style.height = "0px";
  }
}

function showProjects(){
  document.getElementById("projects").classList.remove("hidden");
  document.getElementById("skills").classList.add("hidden");
}

function showSkills(){
  document.getElementById("projects").classList.add("hidden");
  document.getElementById("skills").classList.remove("hidden");
}
