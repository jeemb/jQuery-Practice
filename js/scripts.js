$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

	var sentence = prompt("What sentence would you like to encode?");
	var stringLength = sentence.length;

	var first = function(sentence) {
		return (sentence.charAt(0)+sentence.charAt(sentence.length-1));
	};

	var last = function(sentence) {
		return (sentence.charAt(sentence.length-1)+sentence.charAt(0));
	};

	alert(first(sentence));
	alert(last(sentence));
	alert(last(first(sentence)));
});
