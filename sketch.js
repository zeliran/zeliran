let avFont
let vehicles = []

function preload() {
  avFont = loadFont('AvenirNextLTPro-Demi.otf')
}
function setup() {
  createCanvas(min(windowWidth,1920), min(windowWidth*.26,500))
  reInit(min(windowWidth,1920))
}
function reInit(w) {
  vehicles = []
  const pConfig={
    x: map(w,0,1920,0, 20),
    y: map(w,0,1920,0, 355),
    fontSize: map(w,0,1920,1, 313),
    amp: map(w,0,1920,1, 91),
  }
  const pConfig2={
    x: map(w,0,1920,0, 653),
    y: map(w,0,1920,5, 405),
    fontSize: map(w,0,1920,1, 125),
  }
  const points = avFont.textToPoints('Zorba Dance', pConfig.x, pConfig.y, pConfig.fontSize, {
    sampleFactor: 0.3,
  })
  const points2 = avFont.textToPoints('keep it EZ', pConfig2.x, pConfig2.y, pConfig2.fontSize, {
    sampleFactor: 0.3,
  })
  for (let ii = 0; ii < points.length; ii++) {
    const pt = points[ii]
    const y = pt.y + pConfig.amp * cos((2 * PI * pt.x) / width)
    const vehicle = new Vehicle(pt.x, y)
    vehicles.push(vehicle)
  }
  for (var ii = 0; ii < points2.length; ii++) {
    const pt = points2[ii]
    const vehicle = new Vehicle(pt.x, pt.y)
    vehicles.push(vehicle)
  }
}
function windowResized() {
  resizeCanvas(min(windowWidth,1920), min(windowWidth*.26,500))
  reInit(min(windowWidth,1920))
}

function draw() {
  // clear()
  background(255, 50)
  for (let ii = 0; ii < vehicles.length; ii++) {
    vehicles[ii].behaviors()
    vehicles[ii].update()
    vehicles[ii].show()
  }
}
