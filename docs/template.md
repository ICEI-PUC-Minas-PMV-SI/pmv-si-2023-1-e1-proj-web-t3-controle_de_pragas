# **Template Padrão de Projeto - PlantCare**

## **Cores**
Estas são as cores que foram escolhidas para compor nosso layout padrão.<br><br>
### **Justificativa**
Escolhemos a cor verde como principal porque ela representa vida e natureza, remetendo às plantações que visamos cuidar. O vermelho é a nossa cor secundária pois, além de ser a cor que complementa o verde, remete à saúde e amor que existe entre toda plantação e o seu todo.

![Cores - 1](https://user-images.githubusercontent.com/105527392/235377970-e10a0fff-44b8-490f-80f2-97ea98115e15.png)

### **Testes de Contraste**
Para verificar o contraste das cores e conferir se é possível usá-las em conjunto com outras cores do layout, escolhemos testar o contraste segundo à [Web Content Acessibility Guidelines (WCAG)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast), estipulado pela [World Wide Web Consortium (W3C)](https://www.w3.org/). O cálculo para estipular o score de contraste das cores são baseados em [formulas específicas feitas pela W3C](https://www.w3.org/TR/AERT/#color-contrast).<br>
Para o teste foi utilizado o critério [1.4.6 (Contraste Aprimorado) - Nível AAA](https://www.w3.org/TR/WCAG21/#contrast-enhanced), que visa testar o contraste para parágrafos e textos pequenos. Mesmo que alguns contraste falhem no teste, todas as cores na aplicação seguem ao menos o critério [1.4.11 (Contraste sem imagens) - Nível AA](https://www.w3.org/TR/WCAG21/#non-text-contrast).

*A ferramenta usada para verificar o contraste das cores são cortesia da Acart Communications.*<br>
[Site da Acart Communications](https://acart.com/) | [Site da Ferramenta usada para os testes](https://contrastchecker.com/)

### **Índice para os cartões de cor**
  *NOME DA COR (CÓDIGO DA COR)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | :---: |
  **CÓDIGO HEX DA COR**        |||||**TESTE DE CONTRASTE NA COR PRETO 01** *(SCORE DE CONTRASTE)* | 24px | ✔️ Legível <br>❌ Ilegível |
  *CÓDIGO RGB DA COR* |||||           | 16px | ✔️ Legível <br>❌ Ilegível |
  |                  ||||| <span style="color:#F4F4F4">**TESTE DE CONTRASTE NA COR BRANCO 01** *(SCORE DE CONTRASTE)*</span> | 24px | ✔️ Legível <br>❌ Ilegível |
  |                  |||||           | 16px | ✔️ Legível <br>❌ Ilegível |
  
  ### **Cores Principais - Feitas para backgrounds**
  *Verde Principal (p-01)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  **#90C6A9**        |||||**Preto 01** *(8.08)* | 24px | ✔️ |
  *rgb(144, 198, 169)* |||||           | 16px | ✔️ |
  |                  ||||| <span style="color:#F4F4F4">**Branco 01** *(1.76)*</span> | 24px | ❌ |
  |                  |||||           | 16px | ❌ 

  *Vermelho Principal (p-02)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  **#E05955**       |||||**Preto 01** *(4.27)*| 24px | ❌ |
  *rgb(224, 89, 85)* |||||           | 16px | ❌ |
  |                  ||||| <span style="color:#F4F4F4">**Branco 01** *(3.33)*</span> | 24px | ❌ |
  |                  |||||           | 16px | ❌ |


### **Cores Acentuadas - Feitas para textos**
  *Verde Acentuado (a-01)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  **#147550**       |||||**Preto 01** *(2.75)*| 24px | ❌ |
  *rgb(20, 117, 80)* |||||           | 16px | ❌ |
  |                  ||||| **Branco 01** *(5.17)*| 24px | ✔️ |
  |                  |||||           | 16px | ✔️ |


### **Cores de Informação - Mistas**
  *Azul Aviso (i-01)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#87C9D2**       |||||**Preto 01** *(8.43)* | 24px | ✔️ |
  |*rgb(135, 201, 210)* |||||| 16px | ✔️ |
  ||||||**Branco 01** *(1.69)| 24px | ❌ |
  |                     |||||| 16px | ❌ |

  *Verde Sucesso (i-02)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#87D292**       |||||**Preto 01** *(8.69)* | 24px | ✔️ |
  |*rgb(135, 210, 146)* |||||| 16px | ✔️ |
  ||||||**Branco 01** *(1.64)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |


  *Amarelo Atenção (i-03)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#D4B768**       |||||**Preto 01** *(8.03)* | 24px | ✔️ |
  |*rgb(212, 183, 104)* |||||| 16px | ✔️ |
  ||||||**Branco 01** *(1.77)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |

  *Vermelho Falha (i-04)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#F0A1A1**       |||||**Preto 01** *(7.69)* | 24px | ✔️ |
  |*rgb(240, 161, 161)* |||||| 16px | ✔️ |
  ||||||**Branco 01** *(1.85)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |

### **Cores Neutras - Mistas**
  *Preto 01 (n-01)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#202426**       |||||<span style="color:#F4F4F4">**Preto 01** *(1)*</span> | 24px | ❌ |
  |*rgb(32, 36, 38)* |||||| 16px | ❌ |
  ||||||**Branco 01** *(14.23)*| 24px | ✔️ |
  |                     |||||| 16px | ✔️ |
  ||||||**Verde Acentuado** *(2.75)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |

  *Preto 02 (n-02)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#393D3A**       |||||**Preto 01** *(1.42)*| 24px | ❌ |
  |*rgb(57, 61, 58)* |||||| 16px | ❌ |
  ||||||**Branco 01** *(10.04)*| 24px | ✔️ |
  |                     |||||| 16px | ✔️
  ||||||**Verde Acentuado** *(1.94)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |

  *Cinza 01 (n-03)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#68706A**       |||||**Preto 01** *(3.07)*| 24px | ❌ |
  |*rgb(104, 112, 106)* |||||| 16px | ❌ |
  ||||||**Branco 01** *(4.64)*| 24px | ✔️ |
  |                     |||||| 16px | ❌ |
  ||||||**Verde Acentuado** *(1.11)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |

  *Branco 01 (n-04)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#F4F4F4**       |||||**Preto 01** *(14.23)*| 24px | ✔️ |
  |*rgb(244, 244, 244)* |||||| 16px | ✔️ |
  ||||||**Branco 01** *(1)*| 24px | ❌ |
  |                     |||||| 16px | ❌ |
  ||||||**Verde Acentuado** *(5.17)*| 24px | ✔️ |
  |                     |||||| 16px | ❌ |

  *Branco 02 (n-05)* |||||Contraste *WCAG 2.0 - critério 1.4.6*|||
  ---|---|---|---|---| --- | --- | --- |
  |**#BBC9C3**       |||||**Preto 01** *(9.13)*| 24px | ✔️ |
  |*rgb(187, 201, 195)* |||||| 16px | ✔️ |
  ||||||**Branco 01** *(1.56)*| 24px | ❌ |
  |                     |||||| 16px | ❌ 
  ||||||**Verde Acentuado** *(3.32)*| 24px | ✔️ |
  |                     |||||| 16px | ❌ |

<br><br>

## **Tipografia**
A tipografia da aplicação será composta das seguintes fontes.

### **Justificativa**
Escolhemos usar a fonte Ruda como fonte principal para o logotipo, mas ela não será usada na aplicação. As família de fontes Roboto e Roboto Slab irão funcionar como fontes de suporte que serão usadas no projeto. Escolhemos a fonte Ruda como fonte principal por conta da sua simplicidade e também por conta dos seus detalhes orgânicos, que é exatamente o estilo que visamos empregar no projeto PlantCare. As fontes Roboto e Roboto Slac foram escolhidas como fontes de suporte por conta da sua clareza na leitura.

![Tipografia](https://user-images.githubusercontent.com/105527392/235378050-4809a68c-9a74-429d-a036-34aaa234c589.png)

### **Tabela de Fontes**
  
  | Emprego da fonte | Tamanho | Fonte Escolhida |
  | ---------------- | :-------: | :---------------: |
  |**Logotipo**| Variável |Ruda Black (Adaptada)|
  |**Título de Página**| 44px / 48px |Roboto Slab Black|
  |**Título de Seção**| 36px / 45px |Roboto Black|
  |**Rótulos**| 28px / 35px |Roboto Bold|
  |Texto| 16px / 24px |Roboto|
  
## **Iconografia**
Escolhemos usar ícones para os menus, categorias e algumas funcionalidades da aplicação.
![Iconografia](https://user-images.githubusercontent.com/105527392/235378321-5433296d-772d-447c-9d7e-1c99c7a47f73.png)
Os ícones selecionados fazem parte da biblioteca [Material Icons](https://fonts.google.com/icons), feita pela Google.

## **Logomarca**
A logo foi criada pensando no amor entre uma plantação em seu dono, sendo de uma pequena horta à uma fazenda de médio porte. A logo é composta por uma folha, representando as plantações de forma ampla, e um coração que representa o amor citado anteriormente.

![Logomarca](https://user-images.githubusercontent.com/105527392/235378481-3563f53b-281e-4452-9c51-c09dd4cb8edf.png)
