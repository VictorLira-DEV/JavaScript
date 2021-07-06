const chefe = {
    empresas: {
        espaceX: {
            funcionarios: {
                funcionario1: {
                    nome: 'Anna',
                    idade: 23,
                    sexo: 'Feminino'
                },
                funcionario2: {
                    nome: 'Carlos',
                    idade: 45,
                    sexo: 'Masculino'
                }      
            }
        },
        tesla: {
            funcionarios: {
                funcionario1: {
                    nome: 'Stella',
                    idade: 234,
                    sexo: 'Feminino'
                },
                funcionario2: {
                    nome: 'Hugo',
                    idade: 75,
                    sexo: 'Masculino'
                }      
            }
        }
    }
}

const { espaceX: { funcionarios: { funcionario1: ana, funcionario2: carlos } } } = chefe.empresas;
const { funcionario1: { nome: stella, idade, sexo }, funcionario2 } = chefe.empresas.tesla.funcionarios;

console.log(sexo)
