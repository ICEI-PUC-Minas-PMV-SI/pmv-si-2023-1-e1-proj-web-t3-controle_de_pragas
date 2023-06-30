# Programação de Funcionalidades - PlantCare
## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

## Requisitos funcionais
|ID       | Descrição do Requisito  | Prioridade | Responsável | Artefato Criado | 
|---------|-------------------------|------------|-------------|-----------------|
|RF-001| A aplicação deve mostrar a página principal sem cadastro prévio do usuário. | ALTA | Carlos | index.html
|RF-002| A aplicação deve mostrar um menu na página principal com as plantações e pragas para que o usuário escolha qual detalhar. | ALTA | Carlos | menu_plantas.html<br>menu_pragas.html
|RF-003| A aplicação deve detalhar a plantação de café, mostrando uma foto da planta, seu nome científico e as três pragas mais famosas por atacá-la. | ALTA | Lucas | plantas-café.html
|RF-004| A aplicação deve detalhar a plantação de trigo, mostrando uma foto da planta, seu nome científico e as três pragas mais famosas por atacá-la. | ALTA | Lucas | plantas-trigo.html
|RF-005| A aplicação deve mostrar uma nova página caso o usuário escolha detalhar uma praga. Essa página deve conter como ela ataca as plantas, como prever sua instalação nas plantações e como exterminá-las. | ALTA | Carlos e Lucas | menu_pragas.html
|RF-006| A aplicação deve prover um formulário para que o usuário envie um e-mail ao especialista. | ALTA | Carlos | duvida_especs.html
|RF-008| A aplicação deve prover um formulário para que o usuário envie um e-mail aos desenvolvedores da aplicação. | ALTA | Carlos | duvida_devs.html
|RF-009| A aplicação deve prover um campo de filtragem para que o usuário consulte as dúvidas enviadas em seu uso. | ALTA | Carlos e Lucas | duvida_devs.html
|RF-010| A aplicação deve mostrar uma página sobre o grupo responsável pela realização do projeto | ALTA | Carlos | menu_sobre.html

## Descrição das estruturas:

## Mensagem
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da mensagem           | 1                                              
| Nome           | Texto             | Nome da pessoa que enviou a mensagem                        | Carlos                                   
| Sobrenome | Texto             | Sobrenome da pessoa que enviou a mensagem                        | Morais                            
| E-mail  | Texto  | E-mail da pessoa que enviou a mensagem  | carlos.morais@email.com                                      
| Mensagem | Texto | Conteúdo da mensagem | Amei o site!
| Destinatário | Número (inteiro) | Código do Destinatário (0 para Desenvolvedor e 1 para Especialista) | 0
