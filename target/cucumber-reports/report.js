$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/k2js/CucumberBasics/feature/Register.feature");
formatter.feature({
  "name": "NT Registration Page Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Without enterting Username and Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag-1"
    }
  ]
});
formatter.step({
  "name": "Click on Registration link",
  "keyword": "When "
});
formatter.step({
  "name": "enter firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter Lastname \"\u003cLastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter phone no \"\u003cphone no\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enter postal code \"\u003cpostal code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "name": "Validate confirmation message",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "Lastname",
        "phone no",
        "email",
        "city",
        "address",
        "postal code",
        "Country"
      ]
    },
    {
      "cells": [
        "sayyed",
        "sameer",
        "26154256525",
        "gcvjhdvcjhdv@gmail.com",
        "gvt",
        "blore",
        "583227",
        "INDIA"
      ]
    }
  ]
});
formatter.background({
  "name": "Open NT with registration page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open browser and NT url",
  "keyword": "Given "
});
formatter.match({
  "location": "NTstepdef.openBrowserAndNTUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Without enterting Username and Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag-1"
    }
  ]
});
formatter.step({
  "name": "Click on Registration link",
  "keyword": "When "
});
formatter.match({
  "location": "NTstepdef.clickOnRegistrationLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter firstname \"sayyed\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter Lastname \"sameer\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterLastname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter phone no \"26154256525\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterPhoneNo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter email \"gcvjhdvcjhdv@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter city \"gvt\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterCity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter address \"blore\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter postal code \"583227\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.enterPostalCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.clickOnSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "NTstepdef.validateConfirmationMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "NTstepdef.closeTheBrowser()"
});
formatter.result({
  "status": "passed"
});
});