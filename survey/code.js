codes = new Set();
var d = Date.now();

codes.add("CNJHC-FRJHJ");

function code ()
{
	c = document.getElementById("code_input");

	if (1000 * 60 * 5 + d < Date.now()) alert("Time's up! Code has expired.");
	if (codes.has(c.value) == false) alert("Invalid code!");
	if (codes.has(c.value) == true && 1000 * 60 * 5 + d > Date.now())
	{
		alert("Thank you!");

		document.write("<!DOCTYPE HTML>");
		document.write("<html>");
		document.write("<head>");
		document.write("<meta charset = 'utf8' name = 'viewport' content = 'width = device-width, initial-scale = 1.0'>");
		document.write("<title>Take the survey!</title>");
		document.write("<link rel = 'stylesheet' href = '/styles.css'>");
		document.write("</head>");
		document.write("<body>");
		document.write("<h1>Please print out this page for Habib Khan to approve.</h1>");
		document.write("<button class = 'button' onclick = 'print()'><p>Print</p></button");
		document.write("</body>");
		document.write("</html>");
	}
}