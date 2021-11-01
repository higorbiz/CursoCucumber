package br.biz.higor.steps;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import gherkin.formatter.model.Scenario;


public class InserirContasSteps {

	WebDriver driver;
	
	@Given("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\higor.biz\\eclipse-workspace\\CursoCucumber\\drivers\\chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.get("https://seubarriga.wcaquino.me/logout");
	}

	@When("^informo o usuario \"([^\"]*)\"$")
	public void informoOUsuario(String arg1) throws Throwable {
	    driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@When("^a senha \"([^\"]*)\"$")
	public void aSenha(String arg1) throws Throwable {
	    driver.findElement(By.id("senha")).sendKeys(arg1);
	}

	@When("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
	    driver.findElement(By.tagName("button")).click();
	}

	@Then("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {
	  String texto = driver.findElement(By.xpath("//div[@class=\"alert alert-success\"]")).getText();
	  Assert.assertEquals("Bem vindo, Higor!", texto);
	    
	}

	@When("^seleciono Contas$")
	public void selecionoContas() throws Throwable {
	   driver.findElement(By.linkText("Contas")).click();
	}

	@When("^seleciono Adicionar$")
	public void selecionoAdicionar() throws Throwable {
		 driver.findElement(By.linkText("Adicionar")).click();
	}

	@When("^informo a conta \"([^\"]*)\"$")
	public void informoAConta(String arg1) throws Throwable {
	    driver.findElement(By.id("nome")).sendKeys(arg1);
	}

	@When("^seleciono Salvar$")
	public void selecionoSalvar() throws Throwable {
		 driver.findElement(By.tagName("button")).click();
	}

	@Then("^a conta e inserida com sucesso$")
	public void aContaEInseridaComSucesso() throws Throwable {
		 String texto = driver.findElement(By.xpath("//div[@class=\"alert alert-success\"]")).getText();
		 Assert.assertEquals("Conta adicionada com sucesso!", texto);
	}
	
	@Then("^sou notificar que o nome da conta e obrigatorio$")
	public void souNotificarQueONomeDaContaEObrigatorio() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class=\"alert alert-danger\"]")).getText();
		 Assert.assertEquals("Informe o nome da conta", texto);
	   
	}
	
	@Then("^sou notificado que ja existe uma conta com esse nome$")
	public void souNotificadoQueJaExisteUmaContaComEsseNome() throws Throwable {
		String texto = driver.findElement(By.xpath("//div[@class=\"alert alert-danger\"]")).getText();
		 Assert.assertEquals("J� existe uma conta com esse nome!", texto);
	}
	
	@Then("^recebo a mensagem \"([^\"]*)\"$")
	public void receboAMensagem(String arg1) throws Throwable {
		String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
		Assert.assertEquals(arg1, texto);
	}
	
	
	@After(order = 0)
	public void fecharBrowser() {
		driver.quit();
	}
	
	@After(order = 1)
	public void screensho(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		
		try {
			FileUtils.copyFile(file, new File("/CursoCucumber/target/screenshots" + cenario.getId() +".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}


}
