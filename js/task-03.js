const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryItem = document.querySelector('.gallery');

// const markup = images
// 	.map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
// 	.join('')

// galleryItem.insertAdjacentHTML('beforeend', markup)
  


for (let i = 0; i < images.length; i += 1) {
  galleryItem.insertAdjacentHTML("beforebegin", `<li class="item-taskfree"><img class="images-taskfree" src= "${images[i].url}" alt= "${images[i].alt}"></img></li>`)

}

// Используй массив объектов images для создания элементов <img>
//  вложенных в < li >.Для создания разметки используй шаблонные строки
//  и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.