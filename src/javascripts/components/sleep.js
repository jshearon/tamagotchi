import energy from '../helpers/data/energy';
import utils from '../helpers/utils';
import './sleep.scss';

const printSleep = () => {
  const domString = `
    <h2>Sleep</h2>
    <h4>Energy Level: <span id="energy-level">${energy.getEnergy()}</span></h4>
    <button id="napButton" class="roundButton"><i class="fab fa-fw fa-napster"></i></i></button>
    <button id="sleepButton" class="roundButton"><i class="fas fa-fw fa-bed"></i></i></button>
  `;
  utils.printToDom('#sleep', domString);
};

const addEnergy = (x) => {
  energy.setEnergy(x);
  printSleep();
};

const sleepListeners = () => {
  document.querySelector('#sleep').addEventListener('click', (e) => {
    if (e.target.id === 'napButton') { addEnergy(50); }
    if (e.target.id === 'sleepButton') { addEnergy(60); }
  });
};

export default { printSleep, sleepListeners };
