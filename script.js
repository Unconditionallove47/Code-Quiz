var textTimer=document.getElementById('countdown');
var startButton=document.getElementById('main')
var finalScore = ''
var currentScore = ''

//text below quiz main menu explained what to do
//when start button is clicked, start button diapears and quiz question pops up
//timer starts when first quiz question pops up
//WHen answer is chosen, it is checked and wrong(time is deducted) or correct is displayed at the bottom
//After answer is chosen, next question set is displayed on screen
//after final question score screen is displayed(prompt for user initials)
//store final score
//after initials are entered, high scores are displayed
//remember button for clear high score
//high score button is available during game in corner
//time countdown in corner**
//Go back button resets page
//timer needs work on question right and wrong
//have dedicated div and p tags for questions and answers that is updated by JS(leave divs and p tags empty in html)
//iterator vairable to keep track of current array location
//when moving to next question increment variable index

function timerCountdown() {  //NEVER ACTIVATES
<button onclick="timerCountdown()">Start</button> 
  var timeLeft = '120';
    var timeInterval = setInterval(function () {
    timeLeft--;    
      if (timeLeftElement > 1) {
        timeLeft.textContent = timeLeftElement + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timeLeft.textContent = timeLeftElement + ' second remaining';
        timeLeft--;
      } else {
        timeLeft.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
  console.log("timeLeft"); //CONSOLE LOG NOT WORKING
  
  
  startButton.addEventListener("btn",timeLeft);
  timerCountdown();


var arrayQuestion=[{
question: "What year New Mexico become a state?",
 options:["1995","1915","1950","1912"],
 answer:"1912"
},
{
question: "What is the population of New Mexico",
options:["2.097M","35m","300k","One single man and woman"],
answer:"2.097m"
},
{
question:"What is the highest point in new Mexico",
options:["Durango","Albuquerque","Carlsbad Caverns","Wheeler Park"],
answer:"Wheeler Park"
},
{
question:"Where is New Mexico located?",
options:["Southwest US","East coast","Below Idaho","Direct Center"],
answer:"Southwest US"
},
{
question:"What is New Mexico's flag symbol",
options:["Sun","A Circle and lines","Zia","Pentagram"],
answer:"Zia"
}]
