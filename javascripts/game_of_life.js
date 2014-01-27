$(document).ready(
  function() {
    // From JavaScript: The good parts - Chapter 6. Arrays,
    // Section 6.7. Dimensions
    Array.matrix = function (m, n, initial) {
      var a, i, j, mat = [];
      for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
          a[j] = 0;
        }
        mat[i] = a;
      }
      return mat;
    };

    var Life = {};

    Life.CELL_SIZE = 5;
    Life.X = 500;
    Life.Y = 500;
    Life.WIDTH = Life.X / Life.CELL_SIZE;
    Life.HEIGHT = Life.Y / Life.CELL_SIZE;
    Life.DEAD = 0;
    Life.ALIVE = 1;
    Life.DELAY = 50;
    Life.STOPPED = 0;
    Life.RUNNING = 1;

    Life.minimum = 2;
    Life.maximum = 3;
    Life.spawn = 3;

    Life.state = Life.STOPPED;
    Life.interval = null;

    Life.grid = Array.matrix(Life.HEIGHT, Life.WIDTH, 0);

    Life.counter = 0;

    Life.updateState = function() {
      var neighbours;

      var nextGenerationGrid = Array.matrix(Life.HEIGHT, Life.WIDTH, 0);

      for (var h = 0; h < Life.HEIGHT; h++) {
        for (var w = 0; w < Life.WIDTH; w++) {
          neighbours = Life.calculateNeighbours(h, w);
          if (Life.grid[h][w] !== Life.DEAD) {
            if ((neighbours >= Life.minimum) &&
              (neighbours <= Life.maximum)) {
                nextGenerationGrid[h][w] = Life.ALIVE;
            }
          } else {
            if (neighbours === Life.spawn) {
              nextGenerationGrid[h][w] = Life.ALIVE;
            }
          }
        }
      }
      Life.copyGrid(nextGenerationGrid, Life.grid);
      Life.counter++;
    };

    Life.calculateNeighbours = function(y, x) {
      var total = (Life.grid[y][x] !== Life.DEAD) ? -1 : 0;
      for (var h = -1; h <= 1; h++) {
        for (var w = -1; w <= 1; w++) {
          if (Life.grid
            [(Life.HEIGHT + (y + h)) % Life.HEIGHT]
            [(Life.WIDTH + (x + w)) % Life.WIDTH] !== Life.DEAD) {
                total++;
          }
        }
      }
      return total;
    };

    Life.copyGrid = function(source, destination) {
      for (var h = 0; h < Life.HEIGHT; h++) {
        /*
        for (var w = 0; w < Life.WIDTH; w++) {
          destination[h][w] = source[h][w];
        }
        */
        destination[h] = source[h].slice(0);
      }
    };

    function Cell(row, column) {
      this.row = row;
      this.column = column;
    };

    var gridCanvas = document.getElementById("grid");
    var counterSpan = document.getElementById("counter");
    var controlLink = document.getElementById("controlLink");
    var clearLink = document.getElementById("clearLink");
    var InitLink = document.getElementById("InitLink");
    var RandomLink = document.getElementById("RandomLink");
    var minimumSelect = document.getElementById("minimumSelect");
    var maximumSelect = document.getElementById("maximumSelect");
    var spawnSelect = document.getElementById("spawnSelect");

    controlLink.onclick = function() {
      switch (Life.state) {
      case Life.STOPPED:
        Life.interval = setInterval(function() {
          update();
        }, Life.DELAY);
        Life.state = Life.RUNNING;
        break;
      default:
        clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      }
    };

    clearLink.onclick = function() {
      Life.grid = Array.matrix(Life.HEIGHT, Life.WIDTH, 0);
      Life.counter = 0;
      clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      updateAnimations();
    }

    InitLink.onclick = function() {
      Life.grid = Array.matrix(Life.HEIGHT, Life.WIDTH, 0);
      Life.counter = 0;
      clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      var picstr = 
          "8,1|9,1|8,2|9,2|7,8|8,8|9,8|6,9|7,9|9,9|10,9|6,10|7,10|9,10|10,10|6,11|7,11|8,11|9,11|10,11|5,12|6,12|10,12|11,12|7,15|8,15|6,16|7,16|8,16|9,16|10,16|6,17|8,18|9,18|10,18|10,19|8,20|9,20|8,21|9,21|3,24|4,24|8,24|9,24|3,25|5,25|7,25|9,25|4,26|5,26|6,26|7,26|8,26|5,27|6,27|7,27|6,28|6,35|7,35|6,36|7,36";
      pointarr = picstr.split("|");
      for(var i in pointarr){
          var p = pointarr[i].split(",");
          var h = parseInt(p[0]) + 12;
          var w = parseInt(p[1]);
          Life.grid[h][w] = 1;
          Life.grid[Life.HEIGHT-h-1][Life.WIDTH-w-1] = 1;
      }
      updateAnimations();
    }

    RandomLink.onclick = function() {
      Life.grid = Array.matrix(Life.HEIGHT, Life.WIDTH, 0);
      for (var h = 0; h < Life.HEIGHT; h++) {
	for (var w = 0; w < Life.WIDTH; w++) {
          if(Math.random() > 0.5){
            Life.grid[h][w]=1;
          }
          else{
            Life.grid[h][w]=0;
          }
        }
      }
      Life.counter = 0;
      clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      updateAnimations();
    }

    minimumSelect.onchange = function() {
      clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      Life.minimum = minimumSelect.value;
    }

    maximumSelect.onchange = function() {
      clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      Life.maximum = maximumSelect.value;
    }

    spawnSelect.onchange = function() {
      clearInterval(Life.interval);
      Life.state = Life.STOPPED;
      Life.spawn = spawnSelect.value;
    }


    function update() {
      Life.updateState();
      //updateInput();
      //updateAI();
      //updatePhysics();
      updateAnimations();
      //updateSound();
      //updateVideo();
    };

    function updateAnimations() {
      for (var h = 0; h < Life.HEIGHT; h++) {
        for (var w = 0; w < Life.WIDTH; w++) {
          if (Life.grid[h][w] === Life.ALIVE) {
            context.fillStyle = "#fff";
          } else {
            context.fillStyle = "#111";
            //context.clearRect();
          }
          context.fillRect(
            w * Life.CELL_SIZE +1,
            h * Life.CELL_SIZE +1,
            Life.CELL_SIZE -1,
            Life.CELL_SIZE -1);
        }
      }
      counterSpan.innerHTML = Life.counter;
    };

    if (gridCanvas.getContext) {
      var context = gridCanvas.getContext('2d');
      var offset = Life.CELL_SIZE;

      for (var x = 0; x <= Life.X; x += Life.CELL_SIZE) {
        context.moveTo(0.5 + x, 0);
        context.lineTo(0.5 + x, Life.Y);
      }
      for (var y = 0; y <= Life.Y; y += Life.CELL_SIZE) {
        context.moveTo(0, 0.5 + y);
        context.lineTo(Life.X, 0.5 + y);
      }
      context.strokeStyle = "#000";
      context.stroke();

      function canvasOnClickHandler(event) {
        var cell = getCursorPosition(event);
        var state = Life.grid[cell.row][cell.column]
          == Life.ALIVE ? Life.DEAD : Life.ALIVE;
        Life.grid[cell.row][cell.column] = state;
        updateAnimations();
      };

      function getCursorPosition(event) {
        var x;
        var y;
        if (event.pageX || event.pageY) {
          x = event.pageX;
          y = event.pageY;
        } else {
          x = event.clientX
            + document.body.scrollLeft
            + document.documentElement.scrollLeft;
          y = event.clientY
            + document.body.scrollTop
            + document.documentElement.scrollTop;
        }

        x -= gridCanvas.offsetLeft;
        y -= gridCanvas.offsetTop;

        var cell = new Cell(Math.floor((y - 4) / Life.CELL_SIZE),
          Math.floor((x - 2) / Life.CELL_SIZE));
        return cell;
      };
      
      gridCanvas.addEventListener("click", canvasOnClickHandler, false);
    } else {
      alert("Canvas is unsupported in your browser.");
    }
  }
);
