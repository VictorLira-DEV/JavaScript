function verificadorDeIdade(){
    let pessoas = [
        {nome:"victor", idade:17, cpf: "172.398.657-70"},
        {nome:"Jozy", idade:28, cpf:"129.239.129-90"},
        {nome:"renaldo", idade:2, cpf:"129.239.129-90"},
        {nome:"carlos", idade:22, cpf:"129.239.129-90"},
        {nome:"Jozy", idade:3, cpf:"129.239.129-90"}
    ]

    for(let i = 0; i <= pessoas.length -1; i++){   
        if(pessoas[i].idade >= 18){
            console.log(pessoas[i].nome + ' parabéns vc é maior de idade')
        }else{
            console.log(pessoas[i].nome + ' vc é menor de idade')
        }
     }
}
//verificadorDeIdade(pessoas[1].idade)
 

verificadorDeIdade()
