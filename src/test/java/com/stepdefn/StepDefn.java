package com.stepdefn;

import org.baseclass.LibGlobal;
import org.login.adactin.AdactinCucumberPom;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefn extends LibGlobal{
	@Given("user lanch the adactin weebpage")
	public void user_lanch_the_adactin_weebpage() {
		
	}

	@When("user should enter valid {string}and{string}")
	public void user_should_enter_valid_and(String string, String string2) {
		 AdactinCucumberPom pom = new AdactinCucumberPom();
		  sendKey(pom.getTxtusername(), string);
		  sendKey(pom.getTxtPassword(), string2);
	}

	@When("user should click on the login button.")
	public void user_should_click_on_the_login_button() {
		 AdactinCucumberPom pom = new AdactinCucumberPom();
		 clickBtn(pom.getBtnLogin());
	}

	@When("user should enter valid username and password")
	public void user_should_enter_valid_username_and_password() {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		  sendKey(pom.getTxtusername(), "Karthi007");
		  sendKey(pom.getTxtPassword(), "Karthi@1989");
	}

	@When("user should be click on the login button")
	public void user_should_be_click_on_the_login_button() {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		 clickBtn(pom.getBtnLogin());
	}

	@When("user should enter valid credantials {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_enter_valid_credantials(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		sendKey(pom.getTxtLocation(), string);
		sendKey(pom.getTxtHotelName(), string2);
		sendKey(pom.getTxtRoomType(), string3);
		sendKey(pom.getTxtRoomNo(), string4);
		sendKey(pom.getTxtDatePick(), string5);
		sendKey(pom.getTxtDatePickOut(), string6);
		sendKey(pom.getTxtAdultRoom(), string7);
		sendKey(pom.getTxtChildRoom(), string8);}

	@When("user should click on search button")
	public void user_should_click_on_search_button() {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		clickBtn(pom.getBtnSubmit());
	}

	@When("user should click on radio button")
	public void user_should_click_on_radio_button() {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		clickBtn(pom.getRdnBtn());}

	@When("user should click on continue button")
	public void user_should_click_on_continue_button() {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		pom.clickBtn(pom.getBtnContinue());}

	@When("user should enter  credantials {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_should_enter_credantials(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
	
		AdactinCucumberPom pom = new AdactinCucumberPom();
		sendKey(pom.getTxtFirstname(), string);
		sendKey(pom.getTxtLastName(), string2);
		sendKey(pom.getTxtAddress(), string3);
		sendKey(pom.getTxtCcNum(), string4);
		sendKey(pom.getTxtType(), string5);
		sendKey(pom.getTxtMonth(), string6);
		sendKey(pom.getTxtExpireYear(), string7);
		sendKey(pom.getTxtCvvNumber(), string8);}

	@When("user should click on booknow button")
	public void user_should_click_on_booknow_button() {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		clickBtn(pom.getBtnBookNow());}

	@Then("user verify the success message and get order number.")
	public void user_verify_the_success_message_and_get_order_number() throws InterruptedException {
		AdactinCucumberPom pom = new AdactinCucumberPom();
		Thread.sleep(5000);
		String getpaticularTxt = getpaticularTxt(pom.getTxtOrderNumber());
		output(getpaticularTxt);
		String cureentUrl = cureentUrl();
		boolean prsentOrNot = prsentOrNot(cureentUrl, "BookingConfirm");
		VerifyAssert("order is verified", prsentOrNot);
	}

}
