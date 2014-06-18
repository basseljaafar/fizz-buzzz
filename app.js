$(document).ready(function(){
//alert(typeof(+""));
//alert(typeof(+" "));
alert((+""));
var FizzBuzz = function(num){

num = +num;
var int = num.toFixed(0); 
//alert(num.toFixed(0));

//if(isNaN(num)){
	while(isNaN(num) || num==0){
		//alert("sdffs");
		num = prompt("Please provide a number");}		
//} else {

	while(num != int){
		num = +prompt("Please provide an integer");
		int = num.toFixed(0);
		}

	//alert("inside");
	var fizzbuzz;

for (var i = 1; i<=num; i++)
{
	if(i%3 == 0)
		{if(i%5==0){
			fizzbuzz = "fizzbuzz";
		} else {
			fizzbuzz = "fizz";}
	} else if (i%5 == 0) {
		fizzbuzz = "buzz";
		
		} else {fizzbuzz = i;}
		
		$("body").append(fizzbuzz).append("<br>");


//}
}

};


var num = prompt("Please enter the number you would like the app to count to","157");

FizzBuzz(num);

});