const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const listCard1 = document.getElementById("listCard1");
const listCard2 = document.getElementById("listCard2");
const listCard3 = document.getElementById("listCard3");
const listCard4 = document.getElementById("listCard4");

listCard1.style.display = "none";
listCard2.style.display = "none";
listCard3.style.display = "none";
listCard4.style.display = "none";

card1.addEventListener("click", (e) => {
  if (listCard1.style.display == "none") {
    listCard1.style.display = "block";
    listCard2.style.display = "none";
    listCard3.style.display = "none";
    listCard4.style.display = "none";
  } else if (listCard1.style.display == "block") {
    listCard1.style.display = "none";
  }
});

card2.addEventListener("click", (e) => {
  if (listCard2.style.display == "none") {
    listCard2.style.display = "block";
    listCard1.style.display = "none";
    listCard3.style.display = "none";
    listCard4.style.display = "none";
  } else if (listCard2.style.display == "block") {
    listCard2.style.display = "none";
  }
});

card3.addEventListener("click", (e) => {
  if (listCard3.style.display == "none") {
    listCard3.style.display = "block";
    listCard1.style.display = "none";
    listCard2.style.display = "none";
    listCard4.style.display = "none";
  } else if (listCard3.style.display == "block") {
    listCard3.style.display = "none";
  }
});

card4.addEventListener("click", (e) => {
  if (listCard4.style.display == "none") {
    listCard4.style.display = "block";
    listCard1.style.display = "none";
    listCard2.style.display = "none";
    listCard3.style.display = "none";
  } else if (listCard4.style.display == "block") {
    listCard4.style.display = "none";
  }
});

//});

/*(function () {
  const startBtn = document.getElementById("button");
  const canvas = document.getElementById("canvas");
  var requestID;

  // 2d Drawing Context.
  var ctx = canvas.getContext("2d");

  // Variables to for the drawing position and object.
  var posX = 0;
  var W = 246;
  var H = 60;
  var circles = [];

  //Get canvas size
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  // Animate.
  function animate() {
    requestID = requestAnimationFrame(animate);
    //Fill canvas with black color
    //ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, W, H);

    //Fill the canvas with circles
    for (var j = 0; j < circles.length; j++) {
      var c = circles[j];

      //Create the circles
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.5)";
      ctx.fill();

      c.x += c.vx;
      c.y += c.vy;
      c.radius -= 0.02;

      if (c.radius < 0) circles[j] = new create();
    }
  }

  //Random Circles creator
  function create() {
    //Place the circles at the center

    this.x = W / 2;
    this.y = H / 2;

    //Random radius between 2 and 6
    this.radius = 2 + Math.random() * 3;

    //Random velocities
    this.vx = -5 + Math.random() * 10;
    this.vy = -5 + Math.random() * 10;

    //Random colors
    this.r = Math.round(Math.random()) * 255;
    this.g = Math.round(Math.random()) * 255;
    this.b = Math.round(Math.random()) * 255;
  }

  for (var i = 0; i < 500; i++) {
    circles.push(new create());
  }

  // Event listener for the start button.
  startBtn.addEventListener("mouseover", function (e) {
    e.preventDefault();

    // Start the animation.
    requestID = requestAnimationFrame(animate);
  });

  // Event listener for the stop button.
  startBtn.addEventListener("mouseout", function (e) {
    e.preventDefault();

    // Stop the animation;
    cancelAnimationFrame(requestID);

    e.preventDefault();

    // Reset the X position to 0.
    posX = 0;

    // Clear the canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the initial box on the canvas.
    ctx.fillRect(posX, 0, boxWidth, canvas.height);
  });
})();*/
