'use strict'

const students = ['jeferson', 'cassia', 'jheniffer', 'jessica']

for (let i = 0; i <= students.length - 1; i++){
    if (students[i] == 'cassia') {
        continue;
    }
    console.log(students[i])
}