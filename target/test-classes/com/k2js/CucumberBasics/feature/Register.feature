Feature: NT Registration Page Validation
Background: Open NT with registration page
Given Open browser and NT url

@tag-1
Scenario Outline: Without enterting Username and Password
When Click on Registration link
And enter firstname "<firstname>"
And enter Lastname "<Lastname>"
And enter phone no "<phone no>"
And enter email "<email>"
And enter city "<city>"
And enter address "<address>"
And enter postal code "<postal code>"
And Country "<Country>"
And click on submit
Then Validate confirmation message
And close the browser

Examples:
 |firstname|Lastname|phone no|email|city|address|postal code|Country|
 |sayyed|sameer|26154256525|gcvjhdvcjhdv@gmail.com|gvt|blore|583227|INDIA |
 
 