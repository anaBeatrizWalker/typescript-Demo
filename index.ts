// Import stylesheets
import './style.css';

let title: string = 'My First App';
document.getElementById('app.title').innerHTML = title;

//Tarefa: Temporizador Tabata
let round: number = 1;
let timer: number = 0;
let rest: number = 0;

let treino = setInterval(() => {
  timer++;
  if (timer <= 20) {
    timer == 0;
    document.getElementById('app.subtitleGo').innerHTML = `Go!`;
    document.getElementById('app.go').innerHTML = timer.toString();

    document.getElementById('app.subtitleRound').innerHTML = `Round:`;
    document.getElementById('app.round').innerHTML = round.toString();
  }

  if (timer > 20) {
    rest++;
    if (rest <= 10) {
      document.getElementById('app.subtitleRest').innerHTML = `Rest!`;
      document.getElementById('app.rest').innerHTML = rest.toString();

      document.getElementById('app.subtitleGo').style.display = 'none';
      document.getElementById('app.go').style.display = 'none';
    }
  }
  if (timer > 30 && round < 8) {
    document.getElementById('app.subtitleGo').style.display = 'block';
    document.getElementById('app.go').style.display = 'block';

    document.getElementById('app.subtitleRound').innerHTML = `Round:`;
    document.getElementById('app.round').innerHTML = round.toString();
    round++;
    timer = 0;
    rest = 0;
  }
}, 100);
