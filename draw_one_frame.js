function draw_one_frame(cur_frac) {

  angleMode(DEGREES);
  background(217, 154, 159);
  noStroke();

  // Colour Parameters

  let fill_col;
  let fillMult;


  // Sets Cube core colour
  let colCubeTopR = 217;
  let colCubeTopG = 154;
  let colCubeTopB = 159;

// Sets Ground core colour
  let colTopR = 217;
  let colTopG = 154;
  let colTopB = 159;

  let colRightR = colTopR - 25;
  let colRightG = colTopG - 25;
  let colRightB = colTopB - 25;

  let colLeftR = colTopR - 75;
  let colLeftG = colTopG - 75;
  let colLeftB = colTopB - 75;

  let colRightGradR = colRightR - 37.5;
  let colRightGradG = colRightG - 37.5;
  let colRightGradB = colRightB - 37.5;

  let colLeftGradR = colLeftR - 37.5;
  let colLeftGradG = colLeftG - 37.5;
  let colLeftGradB = colLeftB - 37.5;

  let dotcolRightR = colRightR + 25;
  let dotcolRightG = colRightG + 25;
  let dotcolRightB = colRightB + 25;

  let dotcolLeftR = colLeftR + 25;
  let dotcolLeftG = colLeftG + 25;
  let dotcolLeftB = colLeftB + 25;

  let edgeHighlightcolRightInnerR = colTopR + 12.5;
  let edgeHighlightcolRightInnerG = colTopG + 12.5;
  let edgeHighlightcolRightInnerB = colTopB + 12.5;

  let edgeHighlightcolRightOuterR = colTopR - 12.5;
  let edgeHighlightcolRightOuterG = colTopG - 12.5;
  let edgeHighlightcolRightOuterB = colTopB - 12.5;

  let edgeHighlightcolLeftInnerR = colTopR + 25;
  let edgeHighlightcolLeftInnerG = colTopG + 25;
  let edgeHighlightcolLeftInnerB = colTopB + 25;

  let edgeHighlightcolLeftOuterR = colTopR - 25;
  let edgeHighlightcolLeftOuterG = colTopG - 25;
  let edgeHighlightcolLeftOuterB = colTopB - 25;

  let edgeHighlightcolCentreR = colRightR - 25;
  let edgeHighlightcolCentreG = colRightG - 25;
  let edgeHighlightcolCentreB = colRightB - 25;

  let colRight = color(colRightR, colRightG, colRightB);
  let colLeft = color(colLeftR,colLeftG,colLeftB);
  let colTop = color(colTopR,colTopG,colTopB);

  let b1 = colRight;
  let b2 = color(colRightGradR, colRightGradG, colRightGradB);
  let c1 = colLeft;
  let c2 = color(colLeftGradR, colLeftGradG, colLeftGradB);

  let dotcolRight = color(dotcolRightR, dotcolRightG, dotcolRightB);
  let dotcolLeft = color(dotcolLeftR, dotcolLeftG, dotcolLeftB);

  let edgeHighlightcolRightInner = color(edgeHighlightcolRightInnerR,edgeHighlightcolRightInnerG, edgeHighlightcolRightInnerB);
  let edgeHighlightcolRightOuter = color(edgeHighlightcolRightOuterR,edgeHighlightcolRightOuterG, edgeHighlightcolRightOuterB);
  let edgeHighlightcolLeftInner = color(edgeHighlightcolLeftInnerR,edgeHighlightcolLeftInnerG, edgeHighlightcolLeftInnerB);
  let edgeHighlightcolLeftOuter = color(edgeHighlightcolLeftOuterR,edgeHighlightcolLeftOuterG, edgeHighlightcolLeftOuterB);
  let edgeHighlightcolCentre = color(edgeHighlightcolCentreR, edgeHighlightcolCentreG, edgeHighlightcolCentreB);


  // Scaling parameter
  let widthUnit = width / 960;

  // Speed and Intensity of waves
  let size_smoothness = 200 * widthUnit;
  let time_smoothness = 7;


  // Grid Sizing
  let gridGap = .5 * widthUnit;
  let gridPadding = 1 * widthUnit;
  let gridHeight = -175 * widthUnit;
  let gridMarginTop = 50 * widthUnit;
  let gridBorderSize = 20 * widthUnit;

  let gridSize = width / 2 - 2 * gridMarginTop;

  // Cube Sizing
  let cubeAmm = 15;
  let cubeSize = gridSize / cubeAmm;
  let cubeDepth = 100 * widthUnit;

  let cubeMovementHeight = 125 * widthUnit;

  let edgeHighlightSize = 1 * widthUnit

  let cubeStartHeight = height / 2 - width / 4;

  // Stair Sizing and Position
  let stairSize = 2 * widthUnit;
  let stairSideMargin = 150 * widthUnit;
  let stairAmm = 40;
  let stairMargin = 25 * widthUnit;
  let stairRecessDepth = 150 * widthUnit;

  let dotSize = .5 * widthUnit;

  translate(width / 2, 0);

  // Top Ground Plane
  fill(colTop);

  beginShape();
  vertex(0, cubeStartHeight + gridMarginTop - gridPadding - gridBorderSize / 2);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding + gridBorderSize, height / 2);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 2);
  vertex(0, cubeStartHeight + gridMarginTop - gridPadding);
  vertex(-width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 2);
  vertex(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2);
  endShape(CLOSE);


  // Grid Recess walls
  fill(colRight);

  beginShape();
  vertex(0, cubeStartHeight + gridMarginTop - gridPadding);
  vertex(0, height - (cubeStartHeight) - gridMarginTop + gridPadding);
  vertex(-width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 2);
  endShape(CLOSE);

  fill(colLeft);

  beginShape();
  vertex(0, cubeStartHeight + gridMarginTop - gridPadding);
  vertex(0, height - (cubeStartHeight) - gridMarginTop + gridPadding);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 2);
  endShape(CLOSE);

  noStroke();

  // Recess wall Gradients
  strokeWeight(edgeHighlightSize);
  strokeCap(ROUND);

  setGradientLeft(0, cubeStartHeight + gridMarginTop - gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 4, c1, c2);

  let NUM_DOTS = 12500 * widthUnit;

  noStroke();

  fill(dotcolLeft);

  drawDotsLeft(0, cubeStartHeight + gridMarginTop - gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 8);

  setGradientRight(0, cubeStartHeight + gridMarginTop - gridPadding, -width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 4, b1, b2);

  NUM_DOTS = 12500 * widthUnit;

  noStroke();

  fill(dotcolRight);

  drawDotsRight(0, cubeStartHeight + gridMarginTop - gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 8);

  // Top Ground Plane Highlights
  strokeWeight(edgeHighlightSize);
  strokeCap(ROUND);

  stroke(edgeHighlightcolRightInner);
  line(0, cubeStartHeight + gridMarginTop - gridPadding, -width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolLeftOuter);
  line(0, cubeStartHeight + gridMarginTop - gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolRightOuter);
  line(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2, 0, cubeStartHeight + gridMarginTop - gridPadding - gridBorderSize / 2);

  stroke(edgeHighlightcolLeftInner);

  line(width / 2 - 2 * gridMarginTop + 2 * gridPadding + gridBorderSize, height / 2, 0, cubeStartHeight + gridMarginTop - gridPadding - gridBorderSize / 2);

  stroke(edgeHighlightcolCentre);
  line(0, cubeStartHeight + gridMarginTop - gridPadding, 0, height - (cubeStartHeight) - gridMarginTop + gridPadding);

  noStroke();

  fill(edgeHighlightcolLeftInner);
  ellipse(0, cubeStartHeight + gridMarginTop - gridPadding, 2, 2);

  // Draws Cubes with noise
  for (i = 0; i < cubeAmm; i++) {
    for (j = 0; j < cubeAmm; j++) {
      let cur_x = i * cubeSize - j * cubeSize;
      let cur_y = i * cubeSize / 2 + j * cubeSize / 2;
      let sum = 0;
      for (let r = 0; r < time_smoothness; r++) {
        let brightness = getNoiseValue(cur_x, cur_y, ((cur_frac + r) / time_smoothness) % 1.0, "movement", 0, 255, size_smoothness);
        sum = sum + brightness;
      }
      fill_col = int(sum / time_smoothness);
      fillMult = map(fill_col,0, 255, -150, 100);

      colCubeTopR = 217 + fillMult;
      colCubeTopG = 154 + fillMult;
      colCubeTopB = 159 + fillMult;

      let colCubeRightR = colCubeTopR - 25;
      let colCubeRightG = colCubeTopG - 25;
      let colCubeRightB = colCubeTopB - 25;
    
      let colCubeLeftR = colCubeTopR - 50;
      let colCubeLeftG = colCubeTopG - 50;
      let colCubeLeftB = colCubeTopB - 50;

      colCubeTop = color(colCubeTopR, colCubeTopG, colCubeTopB);
      colCubeRight = color(colCubeRightR, colCubeRightG, colCubeRightB);
      colCubeLeft = color(colCubeLeftR, colCubeLeftG, colCubeLeftB);

      let cubeedgeHighlightcolRightInnerR = colCubeTopR + 5;
      let cubeedgeHighlightcolRightInnerG = colCubeTopG + 5;
      let cubeedgeHighlightcolRightInnerB = colCubeTopB + 5;
    
      let cubeedgeHighlightcolRightOuterR = colCubeTopR - 5;
      let cubeedgeHighlightcolRightOuterG = colCubeTopG - 5;
      let cubeedgeHighlightcolRightOuterB = colCubeTopB - 5;

      let cubeedgeHighlightcolLeftInnerR = colCubeTopR + 12.5;
      let cubeedgeHighlightcolLeftInnerG = colCubeTopG + 12.5;
      let cubeedgeHighlightcolLeftInnerB = colCubeTopB + 12.5;
    
      let cubeedgeHighlightcolLeftOuterR = colCubeTopR - 25;
      let cubeedgeHighlightcolLeftOuterG = colCubeTopG - 25;
      let cubeedgeHighlightcolLeftOuterB = colCubeTopB - 25;
    
    
     cubeedgeHighlightcolLeftInner = color(cubeedgeHighlightcolLeftInnerR, cubeedgeHighlightcolLeftInnerG, cubeedgeHighlightcolLeftInnerB);
       cubeedgeHighlightcolLeftOuter = color(cubeedgeHighlightcolLeftOuterR, cubeedgeHighlightcolLeftOuterG, cubeedgeHighlightcolLeftOuterB);
       cubeedgeHighlightcolRightInner = color(cubeedgeHighlightcolRightInnerR, cubeedgeHighlightcolRightInnerG, cubeedgeHighlightcolRightInnerB);
       cubeedgeHighlightcolRightOuter = color(cubeedgeHighlightcolRightOuterR, cubeedgeHighlightcolRightOuterG, cubeedgeHighlightcolRightOuterB);



      let paraAmm = map(fill_col, 0, 255, 0, cubeMovementHeight);
      drawCube(cur_x, cubeStartHeight + cur_y - paraAmm - gridHeight);
    }
  }

  // Function for Cube
  function drawCube(x, y) {
    fill(colCubeTop);
    beginShape()
    vertex(x, y)
    vertex(x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);
    vertex(x, y - cubeSize + gridGap);
    vertex(x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);
    endShape(CLOSE);

    fill(colCubeRight);

    beginShape();
    vertex(x, y);
    vertex(x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);
    vertex(x + cubeSize - gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);
    vertex(x, y + cubeDepth);
    endShape(CLOSE);

    fill(colCubeLeft);

    beginShape();
    vertex(x, y);
    vertex(x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);
    vertex(x - cubeSize + gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);
    vertex(x, y + cubeDepth);
    endShape(CLOSE);

    strokeWeight(edgeHighlightSize);
    strokeCap(ROUND);

    // Bottom Right
    stroke(cubeedgeHighlightcolRightInner)
    line(x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2, x + cubeSize - gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);

    // Bottom Left
    stroke(cubeedgeHighlightcolLeftOuter)
    line(x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2, x - cubeSize + gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);

    // Top left
    stroke(cubeedgeHighlightcolRightOuter);
    line(x, y - cubeSize + gridGap, x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);

    // Top Right
    stroke(cubeedgeHighlightcolLeftInner);
    line(x, y - cubeSize + gridGap, x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);

    // Middle Right
    stroke(cubeedgeHighlightcolRightInner);
    line(x, y, x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);


    // Middle Left
    stroke(cubeedgeHighlightcolLeftOuter);
    line(x, y, x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);

    // Middle Middle
    stroke(cubeedgeHighlightcolLeftOuter);
    line(x, y, x, y + cubeDepth);

    noStroke();
  }

  // Stairs Recess Wall
  fill(colLeft);

  beginShape();
  vertex(stairSideMargin + stairMargin, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairMargin / 2);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairMargin, height / 2 + stairSideMargin / 2 + stairMargin / 2);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairRecessDepth, height / 2 + stairSideMargin / 2 + stairRecessDepth / 2);
  vertex(stairSideMargin + stairRecessDepth, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairRecessDepth / 2);
  endShape(CLOSE);

  setGradientLeft(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairMargin, height / 2 + stairSideMargin / 2 + stairMargin / 2, stairRecessDepth - stairMargin, height / 4, c1, c2);

  NUM_DOTS = 3500 * widthUnit;

  noStroke();

  fill(dotcolLeft);

  drawDotsLeft(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairMargin, height / 2 - 40 * widthUnit, stairRecessDepth - stairMargin, height / 8);


  // Individual Stair Function
  function drawStairs(x, y) {

    fill(colTop)

    beginShape();
    vertex(x + stairSideMargin + stairMargin, y + height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairMargin / 2);
    vertex(x + width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairMargin, y + height / 2 + stairSideMargin / 2 + stairMargin / 2);
    vertex(x + width / 2 - 2 * gridMarginTop + 2 * gridPadding + stairSize - stairSideMargin + stairMargin, y + height / 2 + stairSize / 2 + stairSideMargin / 2 + stairMargin / 2);
    vertex(x + stairSize + stairSideMargin + stairMargin, y + height - (cubeStartHeight) - gridMarginTop + gridPadding + stairSize / 2 - stairSideMargin / 2 + stairMargin / 2);
    endShape(CLOSE);

    fill(colLeft)

    beginShape();
    vertex(x + width / 2 - 2 * gridMarginTop + 2 * gridPadding + stairSize - stairSideMargin + stairMargin, y + height / 2 + stairSize / 2 + stairSideMargin / 2 + stairMargin / 2);
    vertex(x + stairSize + stairSideMargin + stairMargin, y + height - (cubeStartHeight) - gridMarginTop + gridPadding + stairSize / 2 - stairSideMargin / 2 + stairMargin / 2);
    vertex(x + stairSize + stairSideMargin + stairMargin, y + height - (cubeStartHeight) - gridMarginTop + gridPadding + stairSize / 2 + stairSize - stairSideMargin / 2 + stairMargin / 2);
    vertex(x + width / 2 - 2 * gridMarginTop + 2 * gridPadding + stairSize - stairSideMargin + stairMargin, y + height / 2 + stairSize / 2 + stairSize + stairSideMargin / 2 + stairMargin / 2);

    endShape(CLOSE);
  }

  // Draws Stairs
  for (let w = 0; w < stairAmm; w++) {

    let x = w * stairSize
    let y = 1.5 * (w * stairSize);

    drawStairs(x, y)

  }

  // Bottom Ground Plane
  fill(colTop)

  beginShape();
  vertex(2 * (cubeStartHeight + gridMarginTop - gridPadding) - gridBorderSize, height);
  vertex(width / 2, height);
  vertex(width / 2, height / 2 + gridMarginTop - 2 * gridPadding - gridBorderSize / 2);
  vertex(width / 2 - 2 * (gridMarginTop) + 2 * gridPadding + gridBorderSize, height / 2);
  vertex(width / 2 - 2 * (gridMarginTop) + 2 * gridPadding, height / 2);
  vertex(0, height - (cubeStartHeight) - gridMarginTop + gridPadding);
  vertex(-width / 2 + 2 * (gridMarginTop) - 2 * gridPadding, height / 2)
  vertex(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2);

  beginContour();
  vertex(stairSideMargin + stairMargin, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairMargin / 2);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairMargin, height / 2 + stairSideMargin / 2 + stairMargin / 2);
  vertex(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairRecessDepth, height / 2 + stairSideMargin / 2 + stairRecessDepth / 2);
  vertex(stairSideMargin + stairRecessDepth, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairRecessDepth / 2);
  endContour(CLOSE);

  endShape(CLOSE);

  // Front recess Gradient
  fill(colLeft);

  beginShape();
  vertex(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2);
  vertex(2 * (cubeStartHeight + gridMarginTop - gridPadding) - gridBorderSize, height);
  vertex(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height);

  endShape(CLOSE);

  setGradientLeft(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2, width / 2 - 2 * gridMarginTop + 2 * gridPadding + gridBorderSize + 2 * (cubeStartHeight + gridMarginTop - gridPadding - gridBorderSize / 2), height / 2, c1, c2);

  NUM_DOTS = 50000 * widthUnit;

  fill(dotcolLeft);
  noStroke();

  drawDotsLeft(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height/2 + 202.5*widthUnit, width / 2 - 2 * gridMarginTop + 2 * gridPadding + gridBorderSize + 2 * (cubeStartHeight + gridMarginTop - gridPadding - gridBorderSize / 2), height / 2);


  // Bottom Ground Plane Highlights
  strokeWeight(edgeHighlightSize);

  stroke(edgeHighlightcolLeftInner);
  line(0, height - (cubeStartHeight) - gridMarginTop + gridPadding, -width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolRightOuter);
  line(0, height - (cubeStartHeight) - gridMarginTop + gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolLeftOuter);
  line(2 * (cubeStartHeight + gridMarginTop - gridPadding) - gridBorderSize, height, -width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2);

  stroke(edgeHighlightcolLeftInner);

  line(width / 2, height / 2 + gridMarginTop - 2 * gridPadding - gridBorderSize / 2, width / 2 - 2 * (gridMarginTop) + 2 * gridPadding + gridBorderSize, height / 2);

  stroke(edgeHighlightcolCentre);

  line(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2, -width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height);

  noStroke();


  // Stair Recess Highlights
  strokeWeight(edgeHighlightSize);

  stroke(edgeHighlightcolRightOuter);
  line(stairSideMargin + stairRecessDepth, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairRecessDepth / 2, width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairRecessDepth, height / 2 + stairSideMargin / 2 + stairRecessDepth / 2);

  stroke(edgeHighlightcolLeftInner);
  line(stairSideMargin + stairSize + stairMargin, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairSize / 2 + stairMargin / 2, stairSideMargin + stairRecessDepth, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairRecessDepth / 2);

  stroke(edgeHighlightcolLeftOuter);
  line(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairSize + stairMargin, height / 2 + stairSideMargin / 2 + stairSize / 2 + stairMargin / 2, width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairRecessDepth, height / 2 + stairSideMargin / 2 + stairRecessDepth / 2);

  noStroke();

  randomSeed(10);


  // Function for gradient noise Iso Left
  function drawDotsLeft(x, y, w, h) {

    for (let i = 0; i < NUM_DOTS; i++) {
      let xOff = random() * w;
      let yOff = random() * h;
      rect(x + xOff, y + yOff + (x + xOff) / 2, dotSize, dotSize);
    }
  }

  // Function for gradient noise Iso Right
  function drawDotsRight(x, y, w, h) {

    for (let i = 0; i < NUM_DOTS; i++) {
      let xOff = random() * w;
      let yOff = random() * h;
      rect(x - xOff, y + yOff + (x + xOff) / 2, dotSize, dotSize);
    }
  }
}

// Function for gradient Iso Left
function setGradientLeft(x, y, w, h, c1, c2) {
  noFill();

  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i + w / 2);
  }
}

// Function for gradient Iso Right
function setGradientRight(x, y, w, h, b1, b2) {
  noFill();

  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let b = lerpColor(b1, b2, inter);
    stroke(b);
    line(x, i, x + w, i - w / 2);
  }
}