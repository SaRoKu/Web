var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

function printMeses(){

	meses.forEach(e => {console.log(e)});
}

function squareNumber(num){

	return num*num;
}

function isOdd(num){

	return num%2!=0;
}

function randomNumber(){

	return Math.random();
}

function biggest(first,second,third,fourth){

	return Math.max(first,second,third,fourth);
}

function firstone(){

	alert("Primera funcion!")
	secondone();
}

function secondone(){

	alert("Segunda funcion!")
}