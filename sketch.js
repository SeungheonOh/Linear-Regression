var dotsX = [];
var dotsY = [];

const mean = ( input ) => {
	var total = 0;
	for(var i = 0; i< input.length;i++)
		total += input[i];
	return total/input.length;
}

const sum = ( input ) => {
	var total = 0;
	for(var i = 0;i< input.length;i++)
		total+=input[i];
	return total;
}


function setup() {
	createCanvas(640,640);
	background(60,60,60);
}

function mousePressed() {
	dotsX.push(mouseX);
	dotsY.push(map(mouseY,0,640,640,0));
}

function draw(){
	background(60,60,60);
	for(var i = 0;i<dotsX.length;i++){
		strokeWeight(5);
		stroke(255,255,255);
		point(dotsX[i],map(dotsY[i],640,0,0,640));
	}
	var Xsq = [];
	var XY = [];
	var Ysq = [];
	for(var i = 0;i<dotsX.length;i++){
		Xsq[i] = Math.pow(dotsX[i],2);
		Ysq[i] = Math.pow(dotsY[i],2);
		XY = dotsX[i]*dotsY[i];
	}
	var slope = 0;
	var slopeUpper = 0,slopeLower = 0;
	for(var i = 0;i<dotsX.length;i++){
		slopeUpper += ((dotsX[i] - mean(dotsX))*(dotsY[i] - mean(dotsY)));
		slopeLower += Math.pow( (dotsX[i] - mean(dotsX)) ,2);
	}
	slope = slopeUpper / slopeLower;
	var yIntercept = mean(dotsY) - (slope * mean(dotsX));
	line(0,map(yIntercept,640,0,0,640),640,map(slope*640 + yIntercept,640,0,0,640));
	noStroke();
	fill(255,255,255);
	textAlign(RIGHT,BOTTOM);
	textSize(25);
	text(`y = ${slope}x + ${Math.floor(yIntercept)} `,640,640);
}


/*
 * Finding Regression Function
 * by using The method of Least Squares
 *
 * by Daniel Oh, Sep,24,2018
*/
