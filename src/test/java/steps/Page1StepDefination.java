package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Page1;
import pages.TestBase;

public class Page1StepDefination extends TestBase{
	
	
	Page1 p1;
	
	@Before
	public void methodName() {
		init();
		 p1= PageFactory.initElements(driver, Page1.class);
	}
	
	
	 @Given ("^button for changing background to sky blue color for page1$")
	 
	 public void buttonforChangingBackgroundToSkyBlueColorForPage(){
		 //checking for the button exists
		 
	 }
	 @When ("^User click on the button1$")
	 
	 public void userClickOnTheButton1() throws InterruptedException  {
		
		 
		 p1.setBackgroundToBlue();
	 }
	 
	 @Then ("^the background color will change to sky blue$")
	 
	 public void theBackgroundColorWillChangeToSkyBlue() {
		 p1.blueBackgroundColor();
		 
	 }
	 
	 @Given ("^button for changing background to white color for page1$") 
	 
	 public void buttonForChangingBackgroundToWhiteColorForPage1() {
		 
	 }
	 
	 @When ("^User click on the button2$")
	 
	 public void userClicksOnTheButton2() throws InterruptedException {
		
		
		
		 		 p1.setBackgroundToWhite();
		 
	 }
	 
	 @Then ("^the background color will change to white$")
	 
	 public void theBackgroundColorWillChangeToWhite()  {
		 
		 	p1.whiteBackgroundColor();;
		 
	 }
}
