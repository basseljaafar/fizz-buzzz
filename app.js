$(document).ready(function(){

var fizzbuzz;

for (var i = 1; i<=100; i++)
{
	if(i%3 == 0)
		{if(i%5==0){
			fizzbuzz = "fizzbuzz";
		} else {
			fizzbuzz = "fizz";}
	} else if (i%5 == 0) {
		fizzbuzz = "buzz";
		
		} else {fizzbuzz = i;}
		
		$("body").append(fizzbuzz).append("<br>")
}
});