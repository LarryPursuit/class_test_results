// Constants defining maximum points and passing threshold
const maxPoints = 120;
const passingPoints = 70;

// Points earned by each student
const samPoints = 84;
const alexPoints = 75;
const jessiePoints = 99;

// Boolean indicating whether Alex passed or not
const didAlexPass = !false; // This is always true as !false is true.

// Display strings for each student's points
const samPointsDisplay =
  "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);

const alexPointsDisplay =
  "Alex earned " + alexPoints + " points out of " + maxPoints;
console.log(alexPointsDisplay);

const jessiePointsDisplay =
  "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(jessiePointsDisplay);

// Calculate and display percentages for each student
const samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "% ";
console.log(samPercentDisplay);

const alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "% ";
console.log(alexPercentDisplay);

const jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "% ";
console.log(jessiePercentDisplay);

// Calculate and display missed points for each student
const samMissedPoints = maxPoints - samPoints;
const samMissedPointsDisplay = "Sam missed " + samMissedPoints + " points";
console.log(samMissedPointsDisplay);

const alexMissedPoints = maxPoints - alexPoints;
const alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " points";
console.log(alexMissedPointsDisplay);

const jessieMissedPoints = maxPoints - jessiePoints;
const jessieMissedPointsDisplay =
  "Jessie missed " + jessieMissedPoints + " points";
console.log(jessieMissedPointsDisplay);

// Calculate and display class average
const classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay =
  "The class average was " +
  classAveragePoints +
  " points or " +
  classAveragePercent.toFixed(2) +
  "%. ";
console.log(classAvgDisplay);

// Display Alex's updated points if he failed initially but did extra credit
const alexPointsUpdated =
  "Alex failed initially but did extra credit. Their new score is " +
  alexPoints +
  " out of " +
  maxPoints;
console.log(alexPointsUpdated);

// Update HTML list items with corresponding information
const listItemArray = document.querySelectorAll("li");
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;
