var five = require("johnny-five"),
    board = new five.Board();
    var R1,R2,R3,R4,L1,L2,L3,L4,L,R;
    var UMBRAL1 = 10,UMBRAL2=20,UMBRAL3=30,UMBRAL4=40,UMBRAL5=50;
board.on("ready", function() {
	R1 = new five.Pin(9);
	R2 = new five.Pin(1);
	R3 = new five.Pin(2);
	L1 = new five.Pin(5);
	L2 = new five.Pin(4);
	L3 = new five.Pin(3);

	R4 = new five.Pin(6);
	L4 = new five.Pin(7);
	L5 = new five.Pin(8);
	R5 = new five.Pin(9);
	// Leemos el Pin Analogico A0
	this.pinMode(0, five.Pin.ANALOG);
	this.pinMode(1, five.Pin.ANALOG);
	this.analogRead(0, function(r) {
		console.log("R:"+r);
		if(r>UMBRAL1)
		{
			R1.high();
		}
		else
		{
			R1.low();
		}
		if(r>UMBRAL2)
		{
			R2.high();
		}
		else
		{
			R2.low();
		}
		if(r>UMBRAL3)
		{
			R3.high();
		}
		else
		{
			R3.low();
		}
		if(r>UMBRAL4)
		{
			R4.high();
		}
		else
		{
			R4.low();
		}
		if(r>UMBRAL5)
		{
			R5.high();
		}
		else
		{
			R5.low();
		}
	});
	this.analogRead(1, function(l) {
		console.log("L:"+l);
		if(l>UMBRAL1)
		{
			L1.high();
		}
		else
		{
			L1.low();
		}
		if(l>UMBRAL2)
		{
			L2.high();
		}
		else
		{
			L2.low();
		}
		if(l>UMBRAL3)
		{
			L3.high();
		}
		else
		{
			L3.low();
		}	
		if(l>UMBRAL4)
		{
			L4.high();
		}
		else
		{
			L4.low();
		}
		if(l>UMBRAL5)
		{
			L5.high();
		}
		else
		{
			L5.low();
		}
	});
});
