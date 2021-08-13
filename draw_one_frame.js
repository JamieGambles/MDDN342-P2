function draw_one_frame(cur_frac) {

  angleMode(DEGREES);


  background(234, 205, 178);
  noStroke();

  // Colour Parameters

  let fill_col;


  // Sets Cube core colour
  let colCubeTopR = 125;
  let colCubeTopG = 175;
  let colCubeTopB = 175;

  let colCubeRightR = colCubeTopR + 25;
  let colCubeRightG = colCubeTopG + 25;
  let colCubeRightB = colCubeTopB + 25;

  let colCubeLeftR = colCubeTopR - 50;
  let colCubeLeftG = colCubeTopG - 50;
  let colCubeLeftB = colCubeTopB - 50;

  let cubeedgeHighlightcolRightOuterR = colCubeRightR + 25;
  let cubeedgeHighlightcolRightOuterG = colCubeRightG + 25;
  let cubeedgeHighlightcolRightOuterB = colCubeRightB + 25;

  let cubeedgeHighlightcolRightInnerR = colCubeRightR - 25;
  let cubeedgeHighlightcolRightInnerG = colCubeRightG - 25;
  let cubeedgeHighlightcolRightInnerB = colCubeRightB - 25;

  let cubeedgeHighlightcolLeftOuterR = colCubeLeftR + 25;
  let cubeedgeHighlightcolLeftOuterG = colCubeLeftG + 25;
  let cubeedgeHighlightcolLeftOuterB = colCubeLeftB + 25;

  let cubeedgeHighlightcolLeftInnerR = colCubeLeftR - 25;
  let cubeedgeHighlightcolLeftInnerG = colCubeLeftG - 25;
  let cubeedgeHighlightcolLeftInnerB = colCubeLeftB - 25;

  let colCubeTop = color(colCubeTopR, colCubeTopG, colCubeTopB);
  let colCubeRight = color(colCubeRightR, colCubeRightG, colCubeRightB);
  let colCubeLeft = color(colCubeLeftR, colCubeLeftG, colCubeLeftB);

  let cubeedgeHighlightcolLeftInner = color(cubeedgeHighlightcolLeftInnerR, cubeedgeHighlightcolLeftInnerG, cubeedgeHighlightcolLeftInnerB);
  let cubeedgeHighlightcolLeftOuter = color(cubeedgeHighlightcolLeftOuterR, cubeedgeHighlightcolLeftOuterG, cubeedgeHighlightcolLeftOuterB);
  let cubeedgeHighlightcolRightInner = color(cubeedgeHighlightcolRightInnerR, cubeedgeHighlightcolRightInnerG, cubeedgeHighlightcolRightInnerB);
  let cubeedgeHighlightcolRightOuter = color(cubeedgeHighlightcolRightOuterR, cubeedgeHighlightcolRightOuterG, cubeedgeHighlightcolRightOuterB);

// Sets Ground core colour
  let colTopR = 255;
  let colTopG = 152;
  let colTopB = 105;

  let colRightR = colTopR - 100;
  let colRightG = colTopG - 100;
  let colRightB = colTopB - 100;

  let colRightGradR = colRightR - 25;
  let colRightGradG = colRightG - 25;
  let colRightGradB = colRightB - 25;

  let dotcolRightR = colRightR + 15;
  let dotcolRightG = colRightG + 15;
  let dotcolRightB = colRightB + 15;

  let edgeHighlightcolRightInnerR = colRightR + 125;
  let edgeHighlightcolRightInnerG = colRightG + 125;
  let edgeHighlightcolRightInnerB = colRightB + 125;

  let edgeHighlightcolRightOuterR = colRightR + 75;
  let edgeHighlightcolRightOuterG = colRightG + 75;
  let edgeHighlightcolRightOuterB = colRightB + 75;

  let colLeftR = colTopR - 150;
  let colLeftG = colTopG - 150;
  let colLeftB = colTopB - 150;

  let dotcolLeftR = colLeftR + 15;
  let dotcolLeftG = colLeftG + 15;
  let dotcolLeftB = colLeftB + 15;

  let colLeftGradR = colLeftR - 37.5;
  let colLeftGradG = colLeftG - 37.5;
  let colLeftGradB = colLeftB - 37.5;

  let edgeHighlightcolLeftInnerR = colLeftR + 150;
  let edgeHighlightcolLeftInnerG = colLeftG + 150;
  let edgeHighlightcolLeftInnerB = colLeftB + 150;

  let edgeHighlightcolLeftOuterR = colLeftR + 125;
  let edgeHighlightcolLeftOuterG = colLeftG + 125;
  let edgeHighlightcolLeftOuterB = colLeftB + 125;

  let edgeHighlightcolCentreR = colRightR - 25;
  let edgeHighlightcolCentreG = colRightG - 25;
  let edgeHighlightcolCentreB = colRightB - 25;;

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
  let gridGap = 2 * widthUnit;
  let gridPadding = 2 * widthUnit;
  let gridHeight = -175 * widthUnit;
  let gridMarginTop = 50 * widthUnit;
  let gridBorderSize = 20 * widthUnit;

  let gridSize = width / 2 - 2 * gridMarginTop;

  // Cube Sizing
  let cubeAmm = 25;
  let cubeSize = gridSize / cubeAmm;
  let cubeDepth = 100 * widthUnit;

  let cubeMovementHeight = 150 * widthUnit;

  let edgeHighlightSize = 1 * widthUnit

  let cubeStartHeight = height / 2 - width / 4;

  // Stair Sizing and Position
  let stairSize = 2 * widthUnit;
  let stairSideMargin = 175 * widthUnit;
  let stairAmm = 40;
  let stairMargin = 10 * widthUnit;
  let stairRecessDepth = 100 * widthUnit;

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

  stroke(edgeHighlightcolLeftInner);
  line(0, cubeStartHeight + gridMarginTop - gridPadding, -width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolRightOuter);
  line(0, cubeStartHeight + gridMarginTop - gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolLeftOuter);

  line(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2, 0, cubeStartHeight + gridMarginTop - gridPadding - gridBorderSize / 2);

  stroke(edgeHighlightcolRightInner);

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
      let paraAmm = map(fill_col, 0, 255, 0, cubeMovementHeight);
      drawCube(cur_x, cubeStartHeight + cur_y - paraAmm - gridHeight);
    }
  }

  // Function for Cube
  function drawCube(x, y) {
    fill(colCubeTopR + fill_col - 100, colCubeTopG + fill_col - 100, colCubeTopB + fill_col - 100);
    beginShape()
    vertex(x, y)
    vertex(x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);
    vertex(x, y - cubeSize + gridGap);
    vertex(x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);
    endShape(CLOSE);

    fill(colCubeRightR + fill_col - 100, colCubeRightG + fill_col - 100, colCubeRightB + fill_col - 100);

    beginShape();
    vertex(x, y);
    vertex(x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);
    vertex(x + cubeSize - gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);
    vertex(x, y + cubeDepth);
    endShape(CLOSE);

    fill(colCubeLeftR + fill_col - 100, colCubeLeftG + fill_col - 100, colCubeLeftB + fill_col - 100);

    beginShape();
    vertex(x, y);
    vertex(x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);
    vertex(x - cubeSize + gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);
    vertex(x, y + cubeDepth);
    endShape(CLOSE);

    strokeWeight(edgeHighlightSize);
    strokeCap(ROUND);

    // Bottom Right
    stroke(cubeedgeHighlightcolRightOuterR + fill_col - 100, cubeedgeHighlightcolRightOuterG + fill_col - 100, cubeedgeHighlightcolRightOuterB + fill_col - 100)
    line(x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2, x + cubeSize - gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);

    // Bottom Left
    stroke(cubeedgeHighlightcolLeftInnerR + fill_col - 100, cubeedgeHighlightcolLeftInnerG + fill_col - 100, cubeedgeHighlightcolLeftInnerB + fill_col - 100)
    line(x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2, x - cubeSize + gridGap, y + cubeDepth - cubeSize / 2 + gridGap / 2);

    // Top left
    stroke(cubeedgeHighlightcolLeftOuterR + fill_col - 100, cubeedgeHighlightcolLeftOuterG + fill_col - 100, cubeedgeHighlightcolLeftOuterB + fill_col - 100);
    line(x, y - cubeSize + gridGap, x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);

    // Top Right
    stroke(cubeedgeHighlightcolRightInnerR + fill_col - 100, cubeedgeHighlightcolRightInnerG + fill_col - 100, cubeedgeHighlightcolRightInnerB + fill_col - 100);
    line(x, y - cubeSize + gridGap, x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);

    // Middle Right
    stroke(cubeedgeHighlightcolRightOuterR + fill_col - 100, cubeedgeHighlightcolRightOuterG + fill_col - 100, cubeedgeHighlightcolRightOuterB + fill_col - 100);
    line(x, y, x + cubeSize - gridGap, y - cubeSize / 2 + gridGap / 2);


    // Middle Left
    stroke(cubeedgeHighlightcolLeftOuterR + fill_col - 100, cubeedgeHighlightcolLeftOuterG + fill_col - 100, cubeedgeHighlightcolLeftOuterB + fill_col - 100);
    line(x, y, x - cubeSize + gridGap, y - cubeSize / 2 + gridGap / 2);

    // Middle Middle
    stroke(cubeedgeHighlightcolRightOuterR + fill_col - 100, cubeedgeHighlightcolRightOuterG + fill_col - 100, cubeedgeHighlightcolRightOuterB + fill_col - 100);
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

  drawDotsLeft(width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairMargin, height / 2 - height / 20, stairRecessDepth - stairMargin, height / 8);


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

  stroke(edgeHighlightcolRightInner);
  line(0, height - (cubeStartHeight) - gridMarginTop + gridPadding, -width / 2 + 2 * gridMarginTop - 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolLeftOuter);
  line(0, height - (cubeStartHeight) - gridMarginTop + gridPadding, width / 2 - 2 * gridMarginTop + 2 * gridPadding, height / 2);

  stroke(edgeHighlightcolRightOuter);

  line(2 * (cubeStartHeight + gridMarginTop - gridPadding) - gridBorderSize, height, -width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2);

  stroke(edgeHighlightcolRightInner);

  line(width / 2, height / 2 + gridMarginTop - 2 * gridPadding - gridBorderSize / 2, width / 2 - 2 * (gridMarginTop) + 2 * gridPadding + gridBorderSize, height / 2);

  stroke(edgeHighlightcolCentre);

  line(-width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height / 2, -width / 2 + 2 * gridMarginTop - 2 * gridPadding - gridBorderSize, height);

  noStroke();


  // Stair Recess Highlights
  strokeWeight(edgeHighlightSize);

  stroke(edgeHighlightcolLeftOuter);
  line(stairSideMargin + stairRecessDepth, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairRecessDepth / 2, width / 2 - 2 * gridMarginTop + 2 * gridPadding - stairSideMargin + stairRecessDepth, height / 2 + stairSideMargin / 2 + stairRecessDepth / 2);

  stroke(edgeHighlightcolRightInner);
  line(stairSideMargin + stairSize + stairMargin, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairSize / 2 + stairMargin / 2, stairSideMargin + stairRecessDepth, height - (cubeStartHeight) - gridMarginTop + gridPadding - stairSideMargin / 2 + stairRecessDepth / 2);

  stroke(edgeHighlightcolRightOuter);
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


  // note: you can draw optional things depending on "debugView"
  if (debugView) {
    // we'll draw our "keyframes"
    noFill();
    stroke(255, 0, 0);
    strokeWeight(height / 100);
    // here we "plug in" the values when cur_frac is 0
    rect(-half_width, 0, rect_width, height);
    rect(width - half_width, 0, rect_width, height);
    rect(-width - half_width, 0, rect_width, height);
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