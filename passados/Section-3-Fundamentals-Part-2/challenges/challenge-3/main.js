//methods
const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    weight: 92,
    calcBMI: function(){
        this.BMI = this.weight / this.height ** 2
        return this.BMI
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMI: function(){
        this.BMI = this.weight / this.height ** 2
        return this.BMI
    }
}


if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.firstName} ${john.lastName} BMI (${john.BMI.toFixed(2)}) is higher than ${mark.firstName + mark.lastName} BMI ${mark.BMI.toFixed(2)} `)
}else{
    console.log(`${mark.firstName} ${mark.lastName} BMI (${mark.BMI.toFixed(2)}) is higher than ${john.firstName + john.lastName} BMI ${john.BMI.toFixed(2)} `)
}

