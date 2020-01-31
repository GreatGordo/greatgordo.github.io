const cardArr = ["bio-card", "edu-card", "pro-card", "occ-card","con-card"];

function changeCard(card) {
  for (let x of cardArr) {
    let cardValue = document.getElementById(x);
    if (x.localeCompare(card) != 0) {
      cardValue.style.display = "none";
    } else {
      cardValue.style.display = "block";
    }
  }
}

function openDrawer(card) {
  if (document.getElementById(card).style.display.localeCompare("block") == 0) {
    document.getElementById(card).style.display = "none";
  } else {
    document.getElementById(card).style.display = "block";
  }
}
