
var a = '|';
var i =0;
var num1 = 5;
var num2 = 6;
var myTimer = setInterval(myFun,1200);

function myFun(){
	//a = a + '|'
	//document.getElementById("myinput").innerHTML = a;

	i++;
	var y = document.getElementById("change").innerHTML ;
	console.log(y);
	y = y + a;
	document.getElementById('change').innerHTML = y;
	if(i == num1){
		y = document.getElementById("change").innerHTML ;
		y = y + '(' + num1+') +';
		document.getElementById('change').innerHTML = y;
	}
	if(i == num2+num1){
		y = document.getElementById("change").innerHTML ;
		y = y + '(' + num2+')';
		document.getElementById('change').innerHTML = y;	
		clearInterval(myTimer);
	}
}



