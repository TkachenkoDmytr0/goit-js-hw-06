/*
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/
// 1. ul количество детей
// 2. ввыстести имя h2
// 3. количство li
const ulElement = document.querySelector('#categories');
console.log("Number of categories:", ulElement.children.length);

for (const itemLi of ulElement.children) {
  console.log('\nCategory:', itemLi.firstElementChild.textContent)
  console.log('Elements:', itemLi.lastElementChild.children.length)
}



//////////////////////////////////////////

// const ulElement = document.querySelector('#categories');

// console.log(`Number of categories: ${ulElement.children.length}`);

// console.log([...ulElement.children]);

// [...ulElement.children].forEach(li => {
//   const categoryItemSubList = li.querySelector('ul');

//   console.log(`\nCategory: ${li.firstElementChild.textContent}`);
//   console.log(`Elements: ${categoryItemSubList.children.length}`);
// });



































