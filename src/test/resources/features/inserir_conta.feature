Feature: Cadastro de contas

Como um usu�rio 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada


Background: 
Given que estou acessando a aplicacao
When informo o usuario "higor@hotmail.com"
And a senha "123456"
And seleciono entrar
Then visualizo a pagina inicial
When seleciono Contas
And seleciono Adicionar


Scenario Outline: Deve validar regras cadastro contas
When informo a conta "<conta>"
And seleciono Salvar
Then recebo a mensagem "<mensagem>"

Examples:
	|conta 						|mensagem											      |
	|Conta de Teste	  |Conta adicionada com sucesso!      |
	|								  |Informe o nome da conta		  	    |
	|Conta mesmo nome |Já existe uma conta com esse nome! |


#Scenario: Deve inserir uma conta com sucesso
#And informo a conta "Conta de Teste"
#And seleciono Salvar
#Then a conta e inserida com sucesso
#
#
#Scenario: Nao deve inserir uma conta sem nome
#And informo a conta ""
#And seleciono Salvar
#Then sou notificar que o nome da conta e obrigatorio
#
#
#Scenario: Nao deve inserir uma conta com nome ja existente
#And informo a conta "Conta mesmo nome"
#And seleciono Salvar
#Then sou notificado que ja existe uma conta com esse nome
