// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;

const targetBtnPlus = document.querySelector('button[data-action="increment"]');
const targetBtnMinus = document.querySelector('button[data-action="decrement"]');
const addEventListenerNumber = document.querySelector('#value')


targetBtnPlus.addEventListener("click", () => {
    counterValue++
    addEventListenerNumber.textContent = counterValue
    
    console.log("+1");
});
targetBtnMinus.addEventListener("click", () => {
    counterValue--
    addEventListenerNumber.textContent = counterValue
    
    console.log("-1");
});












