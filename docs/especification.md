# Especificações do Projeto

## Personas

Nome: Murilo Kuster Pereira
<br>
Idade: 58
<br>
Trabalho: Pequeno Fazendeiro
<br>
Estado civil: Casado
<br>
Necessidade: Murilo está com um problema de pragas na sua plantação de café e precisa mitigar esse problema. Ele não possui expertise necessária nesse assunto e não possui dinheiro para contratar um profissional especializado.

Nome: Telma de Jesus Tolentino
<br>
Idade: 23
<br>
Trabalho: Estudante
<br>
Estado civil: Solteira
<br>
Necessidade: Telma está estudando Agronomia na PUCPR e precisa pesquisar de forma rápida sobre diferentes pragas e seus efeitos em plantações.

Nome: Claudia Ferreira Passos
<br>
Idade: 25 anos
<br>
Ocupação: Publicitária
<br>
Estado Civil: Solteira
<br>
Necessidade: Claudia tem uma pequena horta na sua varanda e tem medo de que alguns insetos se interessem e prejudiquem sua plantação. Ela não tem conhecimento algum sobre controle de pragas e possui uma plantação muito pequena para contratar alguém especializado.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`   |PARA ... `MOTIVO/VALOR`                                     |
|--------------------|--------------------------------------|------------------------------------------------------------|
|Murilo              | Acessar informações sobre as pragas que atacam plantação de café | Exterminar as pragas que estão atacando minha plantação             |
|Telma              | Acessar informações sobre diversas pragas de forma rápida | Concluir minha pesquisa             |
|Claudia              | Verificar de forma simples os insetos que prejudicam pequenas hortas | Saber se preciso ou não comprar os produtos necessários para prevenir um ataque            |


## Requisitos funcionais
|ID       | Descrição do Requisito  | Prioridade |
|---------|-------------------------|------------|
|RF-001| A aplicação deve mostrar a página principal sem cadastro prévio do usuário. | ALTA |
|RF-002| A aplicação deve mostrar um menu na página principal com as plantações para que o usuário escolha qual detalhar. | ALTA |
|RF-003| A aplicação deve detalhar a plantação de café, mostrando uma foto da planta, seu nome científico e as cinco pragas mais famosas por atacá-la. | ALTA
|RF-004| A aplicação deve detalhar a plantação de trigo, mostrando uma foto da planta, seu nome científico e as cinco pragas mais famosas por atacá-la. | ALTA
|RF-005| A aplicação deve mostrar uma nova página caso o usuário escolha detalhar uma praga. Essa página deve conter como ela ataca as plantas, como prever sua instalação nas plantações e como exterminá-las. | ALTA
|RF-006| A aplicação deve mostrar uma lista de produtos recomendados para prevenção e extermínio dessas pragas. | ALTA
|RF-007| A aplicação deve prover um formulário para que o usuário envie um e-mail ao especialista. | ALTA
|RF-008| A aplicação deve prover um formulário para que o usuário envie um e-mail aos desenvolvedores da aplicação | ALTA
|RF-009| A aplicação deve mostrar uma página sobre o grupo responsável pela realização do projeto | ALTA

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|------------|
|RNF-001| A aplicação deve ser totalmente responsiva para *desktops*, *tablets* e celulares | ALTA |
|RNF-002| A aplicação deve usar HTML5, CSS3 e JavaScript como *stack* principal | ALTA |
|RNF-003| A aplicação deve seguir o guia de cores e a escala de texto impostos no template padrão | MÉDIA |
|RNF-004| A aplicação deve enviar um e-mail de confirmação para o usuário caso ele envie alguma dúvida à um especialista via formulário | ALTA |
|RNF-005| A aplicação deve usar uma API para enviar o email do usuário para o especialista via formulário | MÉDIA |
|RNF-006| A aplicação deve prover todas as informações disponíveis ao usuário sem necessidade de cadastro | ALTA |
## Restrições

 O projeto contemplará as seguintes **restrições** de acordos com cada itens que segue apresentados na vizualização abaixo.

| ID | Restrição |
|----|-----------|
|01| A aplicação não pode substituir a análise de um profissional especializado.|
|02| A aplicação não pode conter conteúdo ilítico e nem promover qualquer ato ilícito.|
|03| As fontes usadas para o conteúdo da aplicação devem ser confiáveis e disponíveis para os usuários.|
|04| A aplicação não deve aceitar nenhum tipo de pagamento.|
|05| Todos os integrantes do grupo devem fazer parte do projeto. O trabalho para cada integrante do grupo será dividido igualmente e acordado entre o grupo.|
|06| O projeto deve ser finalizado até o dia 12 de Julho.|
|07| A aplicação deve estar disponível vinte e quatro horas por dia. Tratando como exceção pausas para manutenção e mudanças na aplicação.|  
|08| Nenhum módulo Back-end e nenhum banco de dados pode ser utilizado no projeto.|   
