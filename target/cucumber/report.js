$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/page1.feature");
formatter.feature({
  "line": 2,
  "name": "Changing the Background color of page1",
  "description": "",
  "id": "changing-the-background-color-of-page1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Feature1"
    }
  ]
});
formatter.before({
  "duration": 3312358901,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Setting-up Sky Blue Background",
  "description": "",
  "id": "changing-the-background-color-of-page1;setting-up-sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "button for changing background to sky blue color for page1",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on the button1",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "Page1StepDefination.buttonforChangingBackgroundToSkyBlueColorForPage()"
});
formatter.result({
  "duration": 96309299,
  "status": "passed"
});
formatter.match({
  "location": "Page1StepDefination.userClickOnTheButton1()"
});
formatter.result({
  "duration": 3074480699,
  "status": "passed"
});
formatter.match({
  "location": "Page1StepDefination.theBackgroundColorWillChangeToSkyBlue()"
});
formatter.result({
  "duration": 85599,
  "status": "passed"
});
formatter.before({
  "duration": 1735573400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Setting-up white Background",
  "description": "",
  "id": "changing-the-background-color-of-page1;setting-up-white-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "button for changing background to white color for page1",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click on the button2",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "Page1StepDefination.buttonForChangingBackgroundToWhiteColorForPage1()"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.match({
  "location": "Page1StepDefination.userClicksOnTheButton2()"
});
formatter.result({
  "duration": 3111349100,
  "status": "passed"
});
formatter.match({
  "location": "Page1StepDefination.theBackgroundColorWillChangeToWhite()"
});
formatter.result({
  "duration": 54400,
  "status": "passed"
});
});