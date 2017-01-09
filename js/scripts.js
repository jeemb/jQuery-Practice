var gallonsToLiters = function(gallonInput){
	return (gallonInput*3.78541);
};

var gallonInput = parseInt(prompt("Enter gallons: "));

alert(gallonsToLiters(gallonInput));

var litersToGallons = function(litersInput){
	return(litersInput * 0.264172);
};

var litersInput = parseInt(prompt("Enter Liters:"));

alert(litersToGallons(litersInput));
