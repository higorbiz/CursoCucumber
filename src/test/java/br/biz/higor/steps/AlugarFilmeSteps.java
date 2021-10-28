package br.biz.higor.steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import br.biz.higor.entidades.Filme;
import br.biz.higor.entidades.NotaAluguel;
import br.biz.higor.entidades.TipoAluguel;
import br.biz.higor.servicos.AluguelService;
import br.biz.higor.utils.DateUtils;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AlugarFilmeSteps {
	
	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	private String erro;
	private TipoAluguel tipoAluguel = TipoAluguel.COMUM;

	@Given("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
	    filme = new Filme();
	    filme.setEstoque(arg1);
	}

	@Given("^que o preco do aluguel seja R\\$ (\\d+)$")
	public void queOPrecoDoAluguelSejaR$(int arg1) throws Throwable {
	    filme.setAlguel(arg1);
	}

	@When("^alugar$")
	public void alugar() throws Throwable {
	  try {
		  nota = aluguel.alugar(filme, tipoAluguel);
	  } catch (RuntimeException e) {
		  erro = e.getMessage();
	  }
		
	}

	@Then("^o preco do aluguel sera R\\$ (\\d+)$")
	public void oPrecoDoAluguelSeraR$(int arg1) throws Throwable {
	   Assert.assertEquals(arg1, nota.getPreco());
	}

	@Then("^o estoque do filme sera (\\d+) unidade$")
	public void oEstoqueDoFilmeSeraUnidade(int arg1) throws Throwable {
	    Assert.assertEquals(arg1, filme.getEstoque());
	}
	
	
	@Then("^nao sera possivel por falta de estoque$")
	public void naoSeraPossivelPorFaltaDeEstoque() throws Throwable {
	    Assert.assertEquals("Filme sem estoque", erro);
	}
	
	@Given("^que o tipo do aluguel seja (.*)$")
	public void queOTipoDoAluguelSejaExtendido(String tipo) throws Throwable {
	    tipoAluguel = tipo.equals("semanal")? TipoAluguel.SEMANAL: tipo.equals("extendido")? TipoAluguel.EXTENDIDO: TipoAluguel.COMUM;
	}

	@Then("^o pre?o do aluguel sera R\\$ (\\d+)$")
	public void oPreODoAluguelSeraR$(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^a data de entreda sera em (\\d+) dias?$")
	public void aDataDeEntredaSeraEmDias(int arg1) throws Throwable {
	    Date dataEsperada = DateUtils.obterDataDiferencaDias(arg1);
	    Date dataReal = nota.getDataEntrega();
	    
	    DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	    
	    Assert.assertEquals(format.format(dataEsperada), format.format(dataReal));
	}

	@Then("^a pontuacao sera de (\\d+) pontos$")
	public void aPontuacaoSeraDePontos(int arg1) throws Throwable {
	    Assert.assertEquals(arg1, nota.getPontuacao());
	}
}
