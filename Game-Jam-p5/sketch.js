createCanvas();

function update() {
	background('skyblue');

	textAlign(CENTER);
	textSize(20);
	text('click to jump!', halfWidth, halfHeight - 100);

	if (mouse.presses()) ball.vel.y = -5;
}
