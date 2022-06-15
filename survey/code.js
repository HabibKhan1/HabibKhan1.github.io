codes = new Set();

// SEEK

function code ()
{
	var c = document.getElementById("code_input");

	if (codes.has(c.value) == true)
	{
		alert("Thank you!");

		document.write("<!DOCTYPE HTML>");
		document.write("<html>");
		document.write("<head>");
		document.write("</head>");
		document.write("<body>");
		document.write("<p>Please print out this page for Habib Khan to approve.</p>");
		document.write("<button class = 'button' onclick = 'print()'><p>Print</p></button");
		document.write("</html>");
	}
} 
