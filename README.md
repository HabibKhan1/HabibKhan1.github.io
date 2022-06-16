# Table of contents
[HabibKhan1.github.io](#habibkhan1githubio)

[What does it have?](#what-does-it-have)

[Why did I make this?](#why-did-i-make-this)

[The survey!](#the-survey)

## HabibKhan1.github.io

That's [my website](https://habibkhan1.github.io)!

## What does it have?

This site has:

- A home page (nothing brilliant there!)
- A few SIMPLE games (guessing game + mind reader)
- A survey (this is VERY complex -- see [below](#the-survey)!)
- And more!

## Why did I make this?

- I wanted to test my HTML, JS, and CSS skills
- I wanted to make interesting stuff

## The survey!

This needs explanation. The page for this on my website is [here](https://habibkhan1.github.io/survey/).
The program to control this whole survey is on [GitLab](https://gitlab.com/HabibKhan1/WLTUCE). Note that
the program files only really work on Windows (batch files, PowerShell scripts, etc.) Anyway, I will try
to keep this simple. That being said, once the [program](https://gitlab.com/HabibKhan1/WLTUCE) has started
running, the user:
<br>
- Inputs their e-mail address
- Gets an e-mail with a code + [link](https://habibkhan1.github.io/survey/)
- Follows the link
- Inputs the code
- Prints a page for me to approve (okay, this part is just for fun!)

The idea is that the user gets an e-mail with a completely random code (something like XXXXX-XXXXX). Now,
what does the program actually do behind the scenes? It:

- Gets the e-mail address
- Generates the code (like XXXXX-XXXXX)
- Updates [code.js](https://github.com/HabibKhan1/HabibKhan1.github.io/blob/main/survey/code.js) to
recognize the new code

Okay, let's pause here for a second. For this, the program actually edits code.js on the local computer
accordingly. The program then pushes the changes to this (GitHub) repository with Git (all from the command
line!) For this, the program has a [batch file](https://gitlab.com/HabibKhan1/WLTUCE/-/blob/main/Git.bat).

- Sends the e-mail accordingly

Here, the program edits [Message.txt](https://gitlab.com/HabibKhan1/WLTUCE/-/blob/main/Message.txt) to send
the appropriate e-mail. Next, the program edits a 
[PowerShell script](https://gitlab.com/HabibKhan1/WLTUCE/-/blob/main/Email.ps1) to send the e-mail, again
from the command line. Of course, following this, this script will then be run to send the e-mail.

Phew! That was a lot! Of course, for the user, they will (probably) not know of all this. They simply put in
their e-mail address, check their e-mail, follow the link, and punch in the code. (Wait, don't they print the
page for me to approve? Oh, wait... that was just for fun.)