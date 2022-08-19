// Import stylesheets
import './style.css';

//Temporizador

let title: string = 'My First App';
document.getElementById('app.title').innerHTML = title;

let counter: number = 0;
/*
setInterval(
  nome da função que será executada, 
  de quanto em quanto tempo será executada (m milisegundos))
*/
let intervalId = setInterval(() => {
  counter++; //counter = counter + 1
  document.getElementById('app.counter').innerHTML = counter.toString();
}, 1000);
