codes = new Set();
var d = Date.now();

codes.add("VYNIZ-CLOYP");

function code ()
{
	c = document.getElementById("code_input");

	if (codes.has(c.value) == true && 1000 * 60 * 5 + d < Date.now())
	{
		alert("Thank you!")

		document.write("<!DOCTYPE HTML>");
		document.write("<html>");
		document.write("<head>");
		document.write("</head>");
		document.write("<body>");
		document.write("<p>Please print out this page for Habib Khan to approve.</p>");
		document.write("<button class = 'button' onclick = 'print()'><p>Print</p></button");
		document.write("</body>");
		document.write("</html>");
	}
}