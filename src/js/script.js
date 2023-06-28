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
        let usuario = JSON.parse(localStorage.getItem(chave));
        html = html+"<tr>";
        html=html+"<td><a href=\"#\" onclick=\"Mensagem('" +  usuario.mensagem + "');\">"+usuario.mensagem+"</a></td>";
        html=html+"<td>"+usuario.email+"</td>";
        html=html+"<td>"+usuario.pnome+"</td>";
        html=html+"<td>"+usuario.snome+"</td>";
        html=html+"</tr>";
    }
    );
    document.getElementById("corpoTabela").innerHTML=html; //Busca o elemento do corpo da tabela e altera o conteúdo para o trecho de HTML gerado no laço (repetição) acima
}