var copyButtons;
var minSizeFont;
var midSizeFont;
var maxSizeFont;
var answerMissingCats = "If you can see your cat\'s bowl it means your little friend is exploring behind some furniture. If you can\'t spot its bowl or the cat store is not working, please send an email to help@hyperbeard.com";
var answerCoppa = "Thank your for your comment and your concern. This game is not intended for children and should not be played by children. The “E 10+” rating of the game is set by the IARC, an independent rating agency. The description of the game makes it clear that this game contains mature themes and is inappropriate for children under 13.";
var answerHowToPlay ="Adorable Home is about taking care of your house, pets, and partner. You can earn Love (in the shape of hearts) by interacting with your partner, cats, and visitors. With that Love you earn, you will be able to buy new rooms, furniture, more pets, and you will unlock new interactions that can reward you with more Love.";

////////////////////////////Copy functions///////////////////////////////

window.onload=function()
{
    copyButtons = document.getElementsByClassName('buttons');
    document.getElementById("defaultTab").click();
    
}

function copyTextFromElement(elementID)
{
	let element = document.getElementById(elementID); //select the element
	let elementText = element.textContent; //get the text content from the element
	copyTextToClipboard(elementText); //use the copyText function below
}

/*function copyTextFromElementByClass(elementClass)
{
	let element = document.get getElementsByClassName(elementClass);
	let elementText = element.textContent;
	copyTextToClipboard(elementText);
}*/

function copyTextToClipboard(text)
{
  	navigator.clipboard.writeText(text);
}

function copyTextFromVar(varAnswerName) 
{
	navigator.clipboard.writeText(varAnswerName); 
}

////////////////////////////////////////TABS///////////////////////////////

function openTab(evt, tabName)
{
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) 
  {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) 
  {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//////////////////Themes and colors//////////////////////
function changeColorByClass(collections, bgColor, fontColor, borderColor)
{
	if(bgColor == null)
	{
		bgColor = "white";
	}
	if(fontColor == null)
	{
		fontColor = "white";
	}
	if(borderColor == null)
	{
		borderColor = "white";
	}

    for(var i=0, len=collections.length; i<len; i++)
    {
        collections[i].style["background-color"] = bgColor;
        collections[i].style["color"] = fontColor;
        collections[i].style["borderColor"] = borderColor;
    }
}

function changeColor(color) 
{ 
    document.body.style.background = color;
}

function setDefaultTheme()
{
	document.body.style.backgroundColor = "#a39bcc";
	changeColorByClass(copyButtons, 'white', "black", "#black");
	document.getElementById('mainContainer').style.color = "black";
}

function setDayTheme()
{
	document.body.style.backgroundColor = "#f1f1f1";
	changeColorByClass(copyButtons, 'white', "black", "black");
	document.getElementById('mainContainer').style.color = "black";
}

function setAfternoonTheme()
{
	document.body.style.backgroundColor = "#F2D589";
	changeColorByClass(copyButtons, "#FBFFAD", "#3C3C3C", "#676767");
	document.getElementById('mainContainer').style.color = "#3C3C3C";

}

function setNightTheme()
{
	document.body.style.backgroundColor = "#1D0283"
	changeColorByClass(copyButtons, "#766EBD", "black", "#A7CBFF");
	document.getElementById('mainContainer').style.color = "white";
}

function setDarkTheme()
{
	document.body.style.backgroundColor = "black"
	changeColorByClass(copyButtons, "black", "#205DCE", "#205DCE");
	document.getElementById('mainContainer').style.color = "white";
}

///////////////////Not used but cool code :v ///////////////

