var krab = document.querySelector("#krab");
var knife = document.querySelector("#knife");
krab.style.position = "absolute";
krab.style.fontSize = "16px";
knife.style.display = "none";
knife.style.position = "absolute";
knife.style.fontSize = "16px";
knife.style.transform = "rotate(250deg)";
var speed = 5;


document.addEventListener("keydown", function(event) {
  if (event.key == "d") {
    speed = speed + 5;
  }
  else if (event.key == "a") {
    speed = speed - 5;
  }
  else if (event.key == "w") {
    krab.style.fontSize = parseInt(krab.style.fontSize) + 5 + "px";
    knife.style.fontSize = parseInt(knife.style.fontSize) + 5 + "px";
  }
  else if (event.key == "s") {
    krab.style.fontSize = parseInt(krab.style.fontSize) - 5 + "px";
    knife.style.fontSize = parseInt(knife.style.fontSize) - 5 + "px";
  }
  else if (event.key == "q") {
    krab.style.transform = "rotate(15deg)";
  }
  else if (event.key == "e") {
    krab.style.transform = "rotate(-15deg)";
  }
  else if (event.key == "g") {
    knife.style.display = "inline";
  }
  else if (event.key == "f") {
    fireball(parseInt(krab.style.fontSize));
  }
  else if (event.key == "p") {
    poopie(parseInt(krab.style.fontSize));
  }
  else {
    keyPress(event.key);
  }
});

function keyPress(direction) {
  var position = krab.getBoundingClientRect();
  switch (direction) {
    case "ArrowUp":
    case "k":
      var up = parseInt(`${position.top}`);
      krab.style.top = up - speed + "px";
      krab.style.transform = "rotate(0deg)";
      knife.style.top = up - speed + "px";
      break;
    case "ArrowRight":
    case "l":
      var left = parseInt(`${position.left}`);
      krab.style.left = left + speed + "px";
      krab.style.transform = "rotate(90deg)";
      knife.style.left = left + speed + "px";
      break;
    case "ArrowDown":
    case "m":
      var down = parseInt(`${position.top}`);
      krab.style.top = down + speed + "px";
      krab.style.transform = "rotate(180deg)";
      knife.style.top = down + speed + "px";
      break;
    case "ArrowLeft":
    case "j":
      var left = parseInt(`${position.left}`);
      krab.style.left = left - speed + "px";
      krab.style.transform = "rotate(270deg)";
      knife.style.left = left - speed + "px";
      break;
    default:
      document.innerHTML = "what the fuck";
  }
}

function fireball(krabSize) {
  var position = krab.getBoundingClientRect();
  var projectile = document.createElement("ball");
  projectile.innerText = "🔥"
  document.body.appendChild(projectile);
  var position = krab.getBoundingClientRect();
  var up = parseInt(`${position.top}`);
  var left = parseInt(`${position.left}`);
  projectile.style.fontSize = krabSize + "px";
  projectile.style.position = "absolute";
  projectile.style.top = up + "px";
  projectile.style.left = left + "px";
  var projectileInterval = setInterval(function() {
    var position = projectile.getBoundingClientRect();
    var left = parseInt(`${position.left}`);
    projectile.style.left = left + 15 + "px";
  }, 50);
}

function poopie(krabSize) {
  var position = krab.getBoundingClientRect();
  var poop = document.createElement("poop");
  poop.innerText = "💩"
  document.body.appendChild(poop);
  var position = krab.getBoundingClientRect();
  var up = parseInt(`${position.top}`);
  var left = parseInt(`${position.left}`);
  poop.style.fontSize = krabSize + "px";
  poop.style.position = "absolute";
  poop.style.top = up + "px";
  poop.style.left = left + "px";

}
