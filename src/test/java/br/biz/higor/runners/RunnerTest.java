package br.biz.higor.runners;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/inserir_conta.feature",
glue = "br.biz.higor.steps", 
plugin = {"pretty", "html:target/report-html", "json:target/report.json"}, 
monochrome = true, 
snippets = SnippetType.CAMELCASE, 
dryRun = false, 
strict = false,
tags = {"~@ignore"})

public class RunnerTest {
	
	@BeforeClass
	public static void reset() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\higor.biz\\eclipse-workspace\\CursoCucumber\\drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me/logout");
		driver.findElement(By.id("email")).sendKeys("higor@hotmail.com");
		driver.findElement(By.id("senha")).sendKeys("123456");
		driver.findElement(By.tagName("button")).click();
		driver.findElement(By.linkText("reset")).click();
		driver.quit();
	}

}



