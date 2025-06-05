function geraRecomendação(idade){
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
console.log(geraRecomendação(16))