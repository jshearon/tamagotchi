import fun from '../helpers/data/fun';
import utils from '../helpers/utils';
import './play.scss';

const printPlay = () => {
  const domString = `
    <h2>Play</h2>
    <h4>Fun Level: <span id="funness">${fun.getFun()}</span></h4>
    <button id="snowboard"  class="roundButton"><i class="fas fa-fw fa-snowboarding"></i></button>
    <button id="hike" class="roundButton"><i class="fas fa-fw fa-hiking"></i></button>
  `;
  utils.printToDom('#play', domString);
};

const addFunness = (amount) => {
  fun.setFun(amount);
  printPlay();
};

const playListeners = () => {
  document.querySelector('#play').addEventListener('click', (e) => {
    if (e.target.id === 'snowboard') { addFunness(50); }
    if (e.target.id === 'hike') { addFunness(2); }
  });
};

export default { printPlay, playListeners };
