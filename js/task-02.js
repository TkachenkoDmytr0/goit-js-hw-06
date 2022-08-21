const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementUl = document.querySelector('#ingredients');
const liArray = []

for (const el of ingredients) {
  const newTag = document.createElement('li'); 
  newTag.classList.add('item')
  newTag.textContent = el;
  liArray.push(newTag)
}
elementUl.append(...liArray)
console.log(elementUl)
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.