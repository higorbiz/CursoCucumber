$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Funcionalidade: Alugar Filme"
    },
    {
      "line": 2,
      "value": "#"
    },
    {
      "line": 3,
      "value": "#Como um usuario"
    },
    {
      "line": 4,
      "value": "#Eu quero cadastrar alugueis de filmes"
    },
    {
      "line": 5,
      "value": "#Para controlar precos e datas de entrega"
    }
  ],
  "line": 7,
  "name": "Alugar Filme",
  "description": "",
  "id": "alugar-filme",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "que o preco do aluguel seja R$ 3",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "o preco do aluguel sera R$ 3",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "a data de entreda sera em 1 dia",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o estoque do filme sera 1 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 197265499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 117899,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 2219301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 3559000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntredaSeraEmDias(int)"
});
formatter.result({
  "duration": 848801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 90700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Nao deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;nao-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "o estoque do filme sera 0 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 164799,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 70700,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 126100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Deve dar condicoes tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preco do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preco do aluguel sera R$ \u003cvalor\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data de entreda sera em \u003cqtdDias\u003e dias",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuacao sera de \u003cpontuacao\u003e pontos",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 33,
      "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 34,
      "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 35,
      "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Deve dar condicoes tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preco do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preco do aluguel sera R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data de entreda sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuacao sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 96200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 2071699,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 110300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 119900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntredaSeraEmDias(int)"
});
formatter.result({
  "duration": 1251600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 151801,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Deve dar condicoes tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preco do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preco do aluguel sera R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data de entreda sera em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuacao sera de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 162700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 84701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 88001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 384200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntredaSeraEmDias(int)"
});
formatter.result({
  "duration": 434800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 149201,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Deve dar condicoes tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preco do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preco do aluguel sera R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data de entreda sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuacao sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 128101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 1280501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 112301,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 140101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntredaSeraEmDias(int)"
});
formatter.result({
  "duration": 1240200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 124001,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condicoes tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "que o preco do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "o preco do aluguel sera R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "a data de entreda sera em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "a pontuacao sera de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 105500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 97699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 72000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 108400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 83900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntredaSeraEmDias(int)"
});
formatter.result({
  "duration": 429301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 133500,
  "status": "passed"
});
});