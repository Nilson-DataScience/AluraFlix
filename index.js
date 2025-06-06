
/*
Passo a passo da implementação:

1° - As variáveis `campoIdade` e `campoGenero` vão armazenar os valores fornecidos pelos inputs do HTML.

2° - As funções `createInput` e `createCheckbox` serão substituídas por elementos de formulário (form tags) diretamente no HTML.

3° - Precisarei analisar quais tipos primitivos de dados estão sendo armazenados nas variáveis `campoIdade` (provavelmente um número) e `campoGenero` (provavelmente uma string).
*/


let campoIdade;
let campoGenero;
campoIdade = createInput("15")
campoGenero = createCheckbox("Tipo de Filme")

let idade = campoIdade.value()
let genero = campoGenero.checked();

  


function gerarRecomendacao_genero(genero){
  if(genero===true){
    return"Tamo On, Tamo On"
  }
  
}

function geraRecomendacao(idade){
    var json_todos_filmes="todos"
    var livres= "lista infantil <=10"
    var ano14= "lista com filmes >=14"
    var ano16= "lista com filme >=16"
    if(idade>=10){
        if(idade >=18){
           return json_todos_filmes
        }
        else{
            if(idade>=16){
                return  ano16
            }
            else{
                if(idade>=14){
                    return ano14
                }
                else{
                    return livres
                }
            }
        }
    }
}



