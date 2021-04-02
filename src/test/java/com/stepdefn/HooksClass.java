package com.stepdefn;

import java.io.File;
import java.io.IOException;

import org.baseclass.LibGlobal;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;






public class HooksClass extends LibGlobal {
	
	@Before
	public void launchbrowser() throws IOException {
		browserLaunch("https://adactinhotelapp.com");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		DateTime();
		implitywait(20);
		}
	@After
	public void closeBrowser(Scenario sc)  {
		
		
	    TakesScreenshot screenshot = (TakesScreenshot) driver;
	    byte[] screenshotAs = screenshot.getScreenshotAs(OutputType.BYTES);
	    sc.embed(screenshotAs,  "image/png","Adactin");	    
		driver.manage().deleteAllCookies();
		DateTime();
		close();
	}
}
