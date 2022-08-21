const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);
const elementUl = document.querySelector('#ingredients');


for (const el of ingredients) {
  const newTag = document.createElement('li'); 
  elementUl.append(newTag)
  newTag.textContent = el;
  newTag.classList.add('item')
}
console.log(elementUl)
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.