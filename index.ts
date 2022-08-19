// Import stylesheets
import './style.css';

let title: string = 'My First App';
let paragraph: string =
  'Parágrafo qualquer com quebra de linha na template string';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
                    <p>${paragraph}</p>`; //template string

//Console.log
console.log('Olá mundo!');

//Laço
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Mistura de laço com condicional
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} é par`);
  }
}
