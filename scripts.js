var x = Math.floor(Math.random() * 10 + 1);
var addto = Math.floor(Math.random() * 5 + 1);

function darkmode ()
{
    var btntext = document.getElementById("button");

    if (localStorage.getItem("pagemode") == "dark")
    {
        btntext.innerHTML = "Toggle light mode";
        document.body.classList.toggle("dark");
    }
    else if (localStorage.getItem("pagemode") == "light")
    {
        btntext.innerHTML = "Toggle light mode";
        document.body.classList.toggle("light");
    }
    else
    {
        document.body.classList.toggle("dark-mode");

        if (btntext.innerHTML == "Toggle dark mode")
        {
            localStorage.setItem("pagemode", "dark");
            btntext.innerHTML = "Toggle light mode";
        }
        else
        {
            localStorage.setItem("pagemode", "light");
            btntext.innerHTML = "Toggle light mode";
        }
    }
}
  
function guess ()
{
    var guess = document.getElementById("input");

    if (guess.value == x) alert("You did it!");
    else alert("Try again.");
}

function reveals1 ()
{
    var hiddens1 = document.getElementById("hiddens1");

    if (hiddens1.style.display == "none") hiddens1.style.display = "block";
    else hiddens1.style.display = "none";

    document.getElementById("s1").innerHTML = "Think of a number (non-decimal, positive, and NOT zero!)";
}

function reveals2 ()
{
    var hiddens2 = document.getElementById("hiddens2");

    if (hiddens2.style.display == "none") hiddens2.style.display = "block";
    else hiddens2.style.display = "none";

    document.getElementById("s2").innerHTML = "Add " + addto + " to this new number.";
}

function reveals3 ()
{
    var hiddens3 = document.getElementById("hiddens3");

    if (hiddens3.style.display == "none") hiddens3.style.display = "block";
    else hiddens3.style.display = "none";

    document.getElementById("s3").innerHTML = "Multiply this new number by 2.";
}
function reveals4 ()
{
    var hiddens4 = document.getElementById("hiddens4");

    if (hiddens4.style.display == "none") hiddens4.style.display = "block";
    else hiddens4.style.display = "none";

    document.getElementById("s4").innerHTML = "Subtract " + 2 * addto + " from this new number.";
}

function reveals5 ()
{
    var hiddens5 = document.getElementById("hiddens5");

    if (hiddens5.style.display == "none") hiddens5.style.display = "block";
    else hiddens5.style.display = "none";

    document.getElementById("s5").innerHTML = "Divide by your original number.";
}

function reveals6 ()
{
    var hiddens6 = document.getElementById("hiddens6");

    if (hiddens6.style.display == "none") hiddens6.style.display = "block";
    else hiddens6.style.display = "none";

    document.getElementById("s6").innerHTML = "Your new number is 2.";
}
