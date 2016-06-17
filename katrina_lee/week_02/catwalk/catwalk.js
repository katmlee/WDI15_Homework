
//to flip and walk:
var img = document.getElementsByTagName('img')[0];
  img.style.position = 'absolute';
  img.style.left = '0px';

var walkingRight = true;
var catWalk = function() {
var newLeft;
  if (walkingRight === true) {
      var oldLeft = parseInt(img.style.left);
      newLeft = oldLeft + 10;
  }
  if (walkingRight === false) {
      img.style.left = ((parseInt(img.style.left)) - 10) +'px';
  }

  if((parseInt(img.style.left)) === 0){
    walkingRight = true;
    document.getElementById("cat").className = "kitty";

    if((parseInt(img.style.left)) === 650){
      window.clearInterval(id);
    }
  }

  img.style.left = newLeft + 'px';
  if((parseInt(img.style.left)) > window.innerWidth){
    walkingRight = false;
    console.log("we hit the side");
      document.getElementById("cat").className = "flip";
  }
};
var id = window.setInterval(catWalk, 50);

var img2 = document.getElementById('cat2');
  img2.style.position = 'absolute';
  img2.style.left = '0px';

var catWalk2 = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  img2.style.left = newLeft + 'px';
  if((parseInt(img.style.left)) > window.innerWidth){
  img2.style.left = '0px';
  }
};
var id = window.setInterval(catWalk2, 50);
