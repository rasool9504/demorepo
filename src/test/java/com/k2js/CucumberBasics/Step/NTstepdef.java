package com.k2js.CucumberBasics.Step;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NTstepdef {
	private WebDriver driver;
	
	@Given("Open browser and NT url")
	public void openBrowserAndNTUrl() {
		System.setProperty("webdriver.chrome.driver","E:\\seleniumtrainingbyjitendra\\tools\\chromedriver_win32-76\\chromedriver-76.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(120,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com/");
	}

	@When("Click on Registration link")
	public void clickOnRegistrationLink() {
		driver.findElement(By.linkText("REGISTER")).click();
	}

	@When("enter firstname {string}")
	public void enterFirstname(String fn) {
		driver.findElement(By.name("firstName")).sendKeys(fn);
	}

	@When("enter Lastname {string}")
	public void enterLastname(String ln) {
		driver.findElement(By.name("lastName")).sendKeys(ln);
	}

	@When("enter phone no {string}")
	public void enterPhoneNo(String ph) {
		driver.findElement(By.name("phone")).sendKeys(ph);
	}

	@When("enter email {string}")
	public void enterEmail(String email) {
		driver.findElement(By.name("userName")).sendKeys(email);
	}

	@When("enter city {string}")
	public void enterCity(String city) {
		driver.findElement(By.name("city")).sendKeys(city);
	}

	@When("enter address {string}")
	public void enterAddress(String add) {
		driver.findElement(By.name("address1")).sendKeys(add);
	}

	@When("enter postal code {string}")
	public void enterPostalCode(String pc) {
		driver.findElement(By.name("postalCode")).sendKeys(pc);
	}
	 
	@When("Country {string}")
	public void country(String co) {
		WebElement we=driver.findElement(By.name("country"));
		Select s=new Select(we);
		s.selectByVisibleText(co);
		
	}

	@When("click on submit")
	public void clickOnSubmit() {
		driver.findElement(By.name("register")).click();
	}
	
	

	@Then("Validate confirmation message")
	public void validateConfirmationMessage() {
		String expected="Dear sayyed sameer,\nThank you for registering. You may now sign-in using the user name and password you've just entered.\nNote: Your user name is .";
		String actual=driver.findElement(By.xpath("//b[contains(text(),'Dear')]/../../..")).getText();
		System.out.println(actual);
		Assert.assertTrue(expected.equalsIgnoreCase(actual));
		
	}
	
	@When("close the browser")
	public void closeTheBrowser() {
		driver.close();
	}
}
