document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


   const form = document.querySelector('form');
     form.addEventListener('submit', handleInput);




});

const handleInput = function (event) {
  event.preventDefault();
  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value


  const newDiv = document.createElement('div')
  newDiv.classList.add('book')
  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(newDiv)

  const newH2 = document.createElement('h2')
  newH2.textContent = title
  newDiv.appendChild(newH2)

  const newAuthor = document.createElement('p')
  newAuthor.textContent = author
  newDiv.appendChild(newAuthor)

  const newCategory = document.createElement('p')
  newCategory.textContent = category
  newDiv.appendChild(newCategory)

  const form = document.querySelector('#new-item-form');
  form.reset();


  console.log(`${title}, ${author}, ${category}`);

}
