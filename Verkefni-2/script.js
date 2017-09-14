var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Stilli hæð og breidd á canvas.
canvas.width = 1000;
canvas.height = 1000;

// Fylkið colour heldur utan um litina sem hægt er að velja um.
var colour = ['yellow', 'red', 'green', 'blue', 'black', 'white', 'purple', 'brown', 'pink', 'orange'];
// Hef default litinn rauðan.
var color = 'red';

// Hef default stærð 25.
//var size = 25;

// Breyturnar x og y halda utan um hnitin á kassanum, byrjar á 0,0 á X og Y ás.
var x = 0;
var y = 0;

// Hlustar eftir keydown event(þegar ýtt er á takka á lyklaborði).
window.addEventListener("keydown", function() {
	// Kalla á myFunc þegar ýtt hevur verið á takka á lyklaborði.
	myFunc();
}, false);

// Aðferðin myFunc sér um að teikna kassa, velja litinn á honum.
function myFunc() {
	// Breytan key les hvaða takka var ýtt á lyklaborði.
	var key = event.which || event.KeyCode;
	// Breytan colourCode dregur 48 frá key(0 í talnaröðinni) svo hægt sé að sækja viðeigandi lit úr colour fylkinu.
	var colourCode = key - 48;

	// Ef takki er á bilinu 48-57(0-9 í talnaröð) breytir kassinn um lit eftir hvaða tölu er ýtt á.
	if (key >= 48 && key <= 57) {
		// Breytan color tekur sækir viðeigandi lit úr colour fyklkinu.
		// color = colour[48-48=0] = yellow.
		color = colour[colourCode];
	}

	// Les örvatakka og færir kassa eftir hvaða ör er ýtt á.
	if (key == 38) {y -= 25;}
	if (key == 40) {y += 25;}
	if (key == 39) {x += 25;}
	if (key == 37) {x -= 25;}

	//if (key == 246) {size -= 5;}
	//if (key == 45) {size += 5;}

	// Teiknar kassa og fyllir hann með litnum er valinn var.
  ctx.fillStyle = color;
	ctx.fillRect(x, y, size, size);
}



