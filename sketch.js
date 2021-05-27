let font
const vehicles = []

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf')
}

function setup() {
  createCanvas(920, 250)
  const points = font.textToPoints('Zorba Dance', 10, 170, 150, {
    sampleFactor: 0.4,
  })
  const points2 = font.textToPoints('keep it EZ', 310, 220, 60, {
    sampleFactor: 0.4,
  })
  for (let ii = 0; ii < points.length; ii++) {
    const pt = points[ii]
    const y = pt.y + 50 * cos((2 * PI * pt.x) / width)
    const vehicle = new Vehicle(pt.x, y)
    vehicles.push(vehicle)
  }
  for (var ii = 0; ii < points2.length; ii++) {
    const pt = points2[ii]
    const vehicle = new Vehicle(pt.x, pt.y)
    vehicles.push(vehicle)
  }
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
