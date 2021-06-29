'use strict';


const lowerCase = function (name) {
    let teste = name.toLowerCase();
    return firstCaptlized(teste)
}

const firstCaptlized = function(string){
    let upper = string.slice(0,1).toUpperCase();
    let firstName = [upper + string.slice(1)].join();
    return firstName;
}


const identification = function (name, funct) {
    console.log(`meu nome é ${funct(name)}`)
}

identification('Victor', lowerCase)