var ctx, color = "#000";
function test(){
    	drawTouch();
	drawPointer();
	drawMouse();
}
document.addEventListener('DOMContentLoaded', function() {
    var pen = document.getElementById('pen');
    // onClick's logic below:
    pen.addEventListener('click', function() { 
	ctx.strokeStyle = "#000000";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var erase = document.getElementById('eraser');
    // onClick's logic below:
    erase.addEventListener('click', function() {
	ctx.strokeStyle = "#FFF9EB";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var thi = document.getElementById('thi');
    // onClick's logic below:
	thi.addEventListener('click', function() {
	ctx.lineWidth = 3;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var thic = document.getElementById('thic');
    // onClick's logic below:
    thic.addEventListener('click', function() {
	ctx.lineWidth = 5;	
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var thicc = document.getElementById('thicc');
    // onClick's logic below:
    thicc.addEventListener('click', function() {
	ctx.lineWidth = 7;	
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var thiccc = document.getElementById('thiccc');
    // onClick's logic below:
    thiccc.addEventListener('click', function() {
	ctx.lineWidth = 9;	
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var clear = document.getElementById('clear');
    // onClick's logic below:
    clear.addEventListener('click', function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
    });
});
document.addEventListener( "DOMContentLoaded", function(){

	// setup a new canvas for drawing wait for device init
    setTimeout(function(){
	   newCanvas();
    }, 1000);

}, false )

function newCanvas(){
	//define and resize canvas
    document.getElementById("content").style.height = window.innerHeight-90;
    var canvas = '<canvas id="canvas" width="900" height="'+(window.innerHeight-90)+'"></canvas>';
	document.getElementById("content").innerHTML = canvas;
    
    // setup canvas
	ctx=document.getElementById("canvas").getContext("2d");
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;	
	
	// setup to trigger drawing on mouse or touch
    drawTouch();
    drawPointer();
	drawMouse();
}

var drawTouch = function() {
	var start = function(e) {
		ctx.beginPath();
		x = e.changedTouches[0].pageX-90;
		y = e.changedTouches[0].pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
		x = e.changedTouches[0].pageX-90;
		y = e.changedTouches[0].pageY-74;
		ctx.lineTo(x,y);
		ctx.stroke();
	};
    document.getElementById("canvas").addEventListener("touchstart", start, false);
	document.getElementById("canvas").addEventListener("touchmove", move, false);
}; 

var drawTouch = function() {
	var start = function(e) {
		ctx.beginPath();
		x = e.changedTouches[0].pageX-90;
		y = e.changedTouches[0].pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
		x = e.changedTouches[0].pageX-90
		y = e.changedTouches[0].pageY-74;
		ctx.lineTo(x,y);
		ctx.stroke();
	};
    document.getElementById("canvas").addEventListener("touchstart", start, false);
	document.getElementById("canvas").addEventListener("touchmove", move, false);
}; 
    
// prototype to	start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
var drawPointer = function() {
	var start = function(e) {
        e = e.originalEvent;
		ctx.beginPath();
		x = e.pageX-90;
		y = e.pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		e.preventDefault();
        e = e.originalEvent;
		x = e.pageX-90;
		y = e.pageY-74;
		ctx.lineTo(x,y);
		ctx.stroke();
    };
    document.getElementById("canvas").addEventListener("MSPointerDown", start, false);
	document.getElementById("canvas").addEventListener("MSPointerMove", move, false);
};      

function pencil(){
	window.alert("HAHA");
}
// prototype to	start drawing on mouse using canvas moveTo and lineTo
var drawMouse = function() {
	var clicked = 0;
	var start = function(e) {
		clicked = 1;
		ctx.beginPath();
		x = e.pageX-90;
		y = e.pageY-74;
		ctx.moveTo(x,y);
	};
	var move = function(e) {
		if(clicked){
			x = e.pageX-90;
			y = e.pageY-74;
			ctx.lineTo(x,y);
			ctx.stroke();
		}
	};
	var stop = function(e) {
		clicked = 0;
	};
    document.getElementById("canvas").addEventListener("mousedown", start, false);
	document.getElementById("canvas").addEventListener("mousemove", move, false);
	document.addEventListener("mouseup", stop, false);
};
