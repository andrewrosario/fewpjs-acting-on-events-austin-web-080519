// Your code here
document.addEventListener("keydown", function(e) {
    console.log(e.key);
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });

  let dodger = document.getElementById("dodger");

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    console.log(rightNumbers)
    let right = parseInt(rightNumbers, 10);
    console.log(right)
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }