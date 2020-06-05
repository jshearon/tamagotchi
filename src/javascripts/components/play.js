import fun from '../helpers/data/fun';
import utils from '../helpers/utils';

const printPlay = () => {
  const domString = `
    <h2>Play</h2>
    <h4>Full Level: <span id="fullness">${fun.getFun()}</span></h4>
    <button id="dance">Dance</button>
    <button id="draw">Draw</button>
  `;
  utils.printToDom('#play', domString);
};

const addFunness = (amount) => {
  fun.setFun(amount);
  printPlay();
};

const playListeners = () => {
  document.querySelector('#play').addEventListener('click', (e) => {
    if (e.target.id === 'dance') { addFunness(50); }
    if (e.target.id === 'draw') { addFunness(2); }
  });
};

export default { printPlay, playListeners };
