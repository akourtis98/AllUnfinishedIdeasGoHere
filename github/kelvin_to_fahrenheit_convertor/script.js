$(document).ready(function(){
	$("#clickme").click(function(){
		const kelvin = document.form.human.value; // the value of this constant won't change
		var celsius;
		celsius = kelvin - 273; // here I convert Kelvin to Celsius
		var fahrenheit;
		fahrenheit = celsius * (9/5) + 32; //here I convert Celsius to Fahrenheit
		fahrenheit = Math.floor(fahrenheit);
		var display = fahrenheit ;
		document.getElementById('result').value = display;
	});
});