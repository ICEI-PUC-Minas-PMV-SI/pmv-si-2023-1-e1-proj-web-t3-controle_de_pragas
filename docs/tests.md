# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software
## Plano de Testes de Software

**Caso de Teste** | **CT01 - Verificar Praga (Por menu de Plantas)**
 :--------------: | ------------
**Procedimento**  | 1) Usuário abre o menu principal e seleciona o menu Plantas, selecionando uma planta<br>2) A aplicação demonstra uma breve descrição, uma foto da planta e as pragas mais frequentes que atacam ela.<br>3) Se o usuário clickar na foto da praga, a aplicação leva ele pra página que detalha a praga escolhida. Essa página mostra uma breve descrição, uma foto e a plantação favorita dessa praga.
**Requisitos associados** | RF-001 / RF-002 / RF-003 / RF-004 / RF-005 / RF-006
**Resultado esperado** | Vizualização das páginas escolhidas
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Enviar e-mail**
 :--------------: | ------------
**Procedimento**  | 1) Usuário escolhe para quem ele deseja enviar uma mensagem pelo menu "Envie uma dúvida"<br>2) Usuário informa nome, sobrenome, e-mail e mensagem via um formulário na página de envio<br> 3) A aplicação armazena os dados e envia um e-mail para o destinatário escolhido e para o usuário.
**Requisitos associados** | RF-007 / RF-008
**Resultado esperado** | Criação de cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Acessar Página Sobre Nós**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a Página Sobre Nós pelo menu principal<br>2) A aplicação provê um breve texto sobre os desenvolvedores e uma foto de cada desenvolvedor.
**Requisitos associados** | RF-009
**Resultado esperado** | Vizualização da página
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Verificar Praga (Por menu de Plantas)*                       |
|---|---|
|Requisito Associado | RF-001 / RF-002 / RF-003 / RF-004 / RF-005 / RF-006|
|Link do vídeo do teste realizado: | **INSERIR LINK AQUI** | 

|*Caso de Teste*                                 |*CT02 - Enviar e-mail*                        |
|---|---|
|Requisito Associado | RF-007 / RF-008|
|Link do vídeo do teste realizado: | **INSERIR LINK AQUI**  |

|*Caso de Teste*                                 |*CT03 - Acessar Página Sobre Nós*                        |
|---|---|
|Requisito Associado | RF-009 |
|Link do vídeo do teste realizado: | **INSERIR LINK AQUI**  | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que está com um problema de pragas na sua plantação de café e precisa mitigar esse problema. Encontre a praga mais famosa por atacar o café e veja mais informações sobre ela. |
| 2             | Você é uma pessoa que está com uma dúvida específica sobre a sua plantação de trigo. Envie uma dúvida à um especialista. |

## Tipos de Usuário
| Usuário | Idade | Profissão | Contato com tecnologia diariamente (1 - 10) | Fez o teste pelo
|---------|-----------------|----------------------|---|---|
| 1       | 49 | Professor(a) | 4                    | Computador |
| 2       | 25 | Gerente de Banco | 7                    | Celular |
| 3       | 22 | Universitário(a) | 8                    | Computador |
| 4       | 21 | Técnico(a) de Segurança do Trabalho | 10 | Celular |

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que está com um problema de pragas na sua plantação de café e precisa mitigar esse problema. Encontre a praga mais famosa por atacar o café e veja mais informações sobre ela.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 18 segundos                  |
| 2       | SIM             | 4                    | 14 segundos                  |
| 3       | SIM             | 5                    | 12 segundos                  |
| 4       | SIM             | 4                    | 20 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 4.5                | 16 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 4 segundos |


    Comentários dos usuários: Gostei do tamanho dos botões, fica mais fácil pros idosos usarem o site. 
    A função de entrar na página da praga pela página do café não é tão intuitiva, talvez alguém que não tenha tanto contato com tecnologia pode se perder.




Cenário 1: Você é uma pessoa que está com uma dúvida específica sobre a sua plantação de trigo. Envie uma dúvida à um especialista.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1 minuto e 3 segundos        |
| 2       | SIM             | 4                    | 43 segundos                  |
| 3       | SIM             | 5                    | 30 segundos                  |
| 4       | SIM             | 5                    | 20 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 4.5                | 39 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10 segundos |


    Comentários dos usuários: É tudo bem simples mas organizado. Gostei demais!
    Levei um pouco de tempo para achar a opção certa no menu principal, mas tirando isso foi bem simples.




## Avaliação dos Testes de Usabilidade

No geral, os testes de usabilidade foram bem-sucedidos, com taxa de sucesso de 100% em ambos os cenários. Isso evidencia que o site é simples de usar e intuitivo de modo geral. 

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, não há muita diferença entre o usuário 1 (Contato com tecnologia - 4) e os demais (Contato com tecnologia - 7, 8 e 10). A grande diferença no cenário dois aconteceu por conta da velocidade de digitação e a mensagem de cada usuário. Por exemplo: O usuário 1 escreveu "Olá! Eu tenho uma dúvida!" enquanto o usuário 4 escreveu apenas "Mensagem".

Contudo, tendo em vista os comentários vimos que podemos deixar o site mais intuitivo, provavelmente com alguns tooltips e botões mais explicativos.
