import strength from '../helpers/data/strength';
import utils from '../helpers/utils';
import './fight.scss';

const printFight = () => {
  const domString = `
    <h2>Fight</h2>
    <h4>Strength Level: <span id="strength-level">${strength.getStrength()}</span></h4>
    <button id="flightButton" class="roundButton"><i class="fas fa-fw fa-running"></i></button>
    <button id="fightButton" class="roundButton"><i class="fas fa-fw fa-hand-rock"></i></button>
  `;
  utils.printToDom('#fight', domString);
};

const addStrength = (x) => {
  strength.setStrength(x);
  printFight();
};

const fightListeners = () => {
  document.querySelector('#fight').addEventListener('click', (e) => {
    if (e.target.id === 'flightButton') { addStrength(2); }
    if (e.target.id === 'fightButton') { addStrength(-10); }
  });
};

export default { printFight, fightListeners };
