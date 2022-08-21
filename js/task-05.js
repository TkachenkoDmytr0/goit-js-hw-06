// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
const input = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output')

input.addEventListener('input', event => {
    textOutput.textContent = event.target.value

    if (event.target.value === '') {
        textOutput.textContent = 'Anonymous';
    }
})

// targetBtnPlus.addEventListener("click", () => {
//     counterValue++
//     addEventListenerNumber.textContent = counterValue
    
//     console.log("+1");
// });