'use strict';

const person1 = {
    firstName: 'Victor',
    lastName: 'Santos',
    fullName: function (estado = "RJ", bairro) {
        console.log(this.firstName + " " + this.lastName + " mora em " + estado + " " + bairro)
    }
}

const person2 = {
    firstName: 'Hendrick',
    lastName: 'Brayan'
}

const fullName = person1.fullName;

fullName.call(person2, "ES", "Caçaroca");
fullName.call(person1, undefined, "JARDIM BOTANICO")

//---------------------------------------------------
