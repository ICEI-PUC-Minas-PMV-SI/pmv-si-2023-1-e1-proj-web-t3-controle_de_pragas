var atual; 
var localStorage = Window.localStorage; 

function menuFormulario()

{
    atual.classList.add("d-none"); 
    atual = document.getElementById("formulario"); 
    atual.classList.remove("d-none");
}

function menuRelatorioInner()

{ 
    atual.classList.add("d-none"); 
    atual=document.getElementById("formulario");
    atual.classList.remove("d-none");
    var html="";
    var keys = Object.keys(localStorage);

    keys.forEach

    (function
        (chave, pos)
    {
        let pessoa = JSON.parse(localStorage.getItem(chave));
        html = html+"<tr>";
        html=html+"<td><a href=\"#\" onclick=\"buscaCPF('" +  pessoa.cpf + "');\">"+pessoa.cpf+"</a></td>"; //Adiciona a célula (TD) com o CPF da pessoa. Também é inserido o evento onClick para permitir a edição do cadastro
        html=html+"<td>"+pessoa.nome+"</td>"; //Adiciona a célula de dados (TD) com o nome da pessoa
        html=html+"<td>"+pessoa.email+"</td>"; //Adiciona a célula de dados (TD) com o e-mail da pessoa
        html=html+"<td>"+pessoa.nasc+"</td>"; //Adiciona a célula de dados (TD) com o a data de nascimento da pessoa
        html=html+"</tr>"; //Encerra o elemento TR (linha) da pessoa em processamento
    }
    );
    document.getElementById("corpoTabela").innerHTML=html; //Busca o elemento do corpo da tabela e altera o conteúdo para o trecho de HTML gerado no laço (repetição) acima
}