
var person = {
    firstName: "John",
    lastName : "Sanntos",
    id       : 5566,
    fullName : function() {
      return  this.firstName + " " + this.lastName
    }
};

document.querySelector('div.container').innerHTML = person.fullName();


  
