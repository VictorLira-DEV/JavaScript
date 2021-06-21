const day =  'monday' 

switch (day){
    case 'monday':
        console.log('I usually go for a walk')
        break
    case 'tuesday':
        console.log('I look after my little sister')
        break
    case 'wednesday':
    case 'thursday':
        console.log('I go to the grocery store')
        break
    case 'friday':
        console.log('record videos')
        break
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend')
        break
    default:
        console.log('not a valid day')
}


// if(day === 'monday'){
//     console.log('I usually go for a walk')
// }else if(day === 'tuesday'){
//     console.log('I look after my little sister')
// }else if(day === 'wednesday' || day === 'thursday'){
//     console.log('I go to the grocery store')
// }else if(day === 'friday'){
//     console.log('record videos')
// }else if(day === 'saturday' || day === 'sunday'){
//     console.log('enjoy the weekend')
// }else{
//     console.log('not a valid day')
// }