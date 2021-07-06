'use strict';
const answerPoll = document.querySelector('.answer');

const poll = {
    question: 'what is your favorite programming language?',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        //get answer
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(write options numbers)`));
        //register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
//we use the call method to use  a new "this keyword" 
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');



// poll.registerNewAnswer();
