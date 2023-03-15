// your code here
const form = document.querySelector('form');
const urlElement = document.querySelector('#url');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  const name = document.querySelector('#name').value;
  const year = document.querySelector('#year').value;

  // build the query string
  const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

  // update the URL
  urlElement.textContent = `https://localhost:8080/${queryString}`;
});
