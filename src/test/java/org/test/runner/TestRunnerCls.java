package org.test.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.stepdefn.JvmReportt;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;







@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features\\adactinDay3.feature",glue="src\\test\\java\\com\\stepdefn",monochrome=true, plugin = {"pretty","html:D:\\photon eclipse\\CucumberTask2\\Day3Report\\report","json:D:\\photon eclipse\\CucumberTask2\\src\\test\\resources\\ReportJvm\\pom.json"})


public class TestRunnerCls {
	
	@AfterClass
	public static void afterClass() {
	JvmReportt.genrateReport("D:\\photon eclipse\\CucumberTask2\\src\\test\\resources\\ReportJvm.json");
	
	
	
	
	}
	
	
	

}
