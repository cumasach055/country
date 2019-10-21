

let btn = document.getElementById("btn");

btn.onclick = function() {
	let x = setTimeout(function() {
		alert("Sa'lem");
	}, 1000);
	 
};

let btn1 = document.getElementById("btn1");

btn1.onclick  = function() {
	let y = setTimeout(function() {
		alert("Merhaba");
	}, 1000);
};

let btn2 = document.getElementById("btn2");

btn2.onclick = function() {
	let z = setTimeout(function() {
		alert("안녕하세요");
	}, 1000);
};