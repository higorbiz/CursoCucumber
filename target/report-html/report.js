$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/inserir_conta.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usu�rio \r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 32,
  "name": "Nao deve inserir uma conta com nome ja existente",
  "description": "",
  "id": "cadastro-de-contas;nao-deve-inserir-uma-conta-com-nome-ja-existente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "informo o usuario \"higor@hotmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "a senha \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "sou notificado que ja existe uma conta com esse nome",
  "keyword": "Then "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "duration": 4333687100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "higor@hotmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuario(String)"
});
formatter.result({
  "duration": 401771500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 130631400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 630588200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "duration": 50257300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 72249200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 307734600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 116766500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 290430400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJaExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 51930000,
  "status": "passed"
});
formatter.after({
  "duration": 719599500,
  "status": "passed"
});
});