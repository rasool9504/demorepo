package com.k2js.CucumberBasics.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)

@CucumberOptions(
		
		features = "src/test/java/com/k2js/CucumberBasics/feature/Register.feature",
		glue = {"classpath:com.k2js.CucumberBasics.Step"},
		plugin = {"pretty","html:target/cucumber-reports"},
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		strict = true,
		junit = "--step-notifications",
		//dryRun = true,
		tags = {"@tag-1"}
		
		)
public class RunNTRunner {
	
	
}
