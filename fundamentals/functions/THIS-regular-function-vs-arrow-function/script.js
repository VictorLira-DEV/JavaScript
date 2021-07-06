'use strict'

//jamais use arrow function para como método pois ele não retorna o 'This do objeto'

const victor = {
    birthYear: 1997,
    currentYear: 2021,
    firstName: 'Victor',
    lastName: 'Lyra',
    calcAge: function () {
        /*Solution 1 */
        const self = this //para ter acesso ao 'this' do objeto victor, se usarmos o this dentro do 'isMilenial', ela retornará 'undefined', pois é uma função normal
        function isMilenial() {
            console.log(self.firstName)
            console.log(self.currentYear >= 1981 && self.currentYear <= 1996)
        };


        /*Solution 2 */
        /*arrow function não recebe o this então ela busca o this do escopo externo a ela */
        // const isMilenial = () => {
        //     console.log(this)
        //     console.log(this.currentYear >= 1981 && this.currentYear <= 1996)
        // };
        isMilenial();
    }
};

victor.calcAge();