let font
let vehicles = []
let srctxt

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf')
  srctxt = loadStrings('README.md');
}

function setup() {
  console.log(srctxt)
  createCanvas(920, 250)
  var points = font.textToPoints('Zorba Dance', 10, 170, 150, {
    sampleFactor: 0.4,
  })
  var points2 = font.textToPoints('EZ', 400, 220, 80, {
    sampleFactor: 0.4,
  })
  for (var ii = 0; ii < points.length; ii++) {
    var pt = points[ii]
    let y = pt.y + 50 * cos((2 * PI * pt.x) / width)
    var vehicle = new Vehicle(pt.x, y)
    vehicles.push(vehicle)
  }
  for (var ii = 0; ii < points2.length; ii++) {
    var pt = points2[ii]
    var vehicle = new Vehicle(pt.x, pt.y)
    vehicles.push(vehicle)
  }
}

function draw() {
  // clear()
  background(255, 50)
  for (var ii = 0; ii < vehicles.length; ii++) {
    vehicles[ii].behaviors()
    vehicles[ii].update()
    vehicles[ii].show()
  }
}
