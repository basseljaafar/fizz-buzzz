$(document).ready(function(){

var fizzbuzz;

for (var i = 1; i<=100; i++)
{
	if(i%3 == 0)
		{if(i%5==0){
			fizzbuzz = "fizz buzz";
		} else {
			fizzbuzz = "fizz";}
	} else if (i%5 == 0) {
		fizzbuzz = "buzz";
		
		} else {fizzbuzz = i;}
		
		$("ul").append(fizzbuzz).append("<br>")
}
});