package org.test.runner;




import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.stepdefn.JvmReportt;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;




@RunWith(Cucumber.class)

@CucumberOptions(features="src\\test\\resources",glue="org.step.stepdefn",dryRun=true,monochrome=true,plugin= {"pretty","html:D:\\photon eclipse\\CucumberTask2\\Report","json:\\src\\test\\resources\\ReportJvm\\po.json"})
		
public class TestRunnerClass {
	@AfterClass
	public static void afterClass() {
	JvmReportt.genrateReport("src\\test\\resources\\ReportJvm.json");
	
	}
	}