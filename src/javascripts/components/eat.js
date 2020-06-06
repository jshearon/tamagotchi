import full from '../helpers/data/full';
import utils from '../helpers/utils';
import './eat.scss';

const printEat = () => {
  const domString = `
    <h2>Eat</h2>
    <h4>Full Level: <span id="fullness">${full.getFull()}</span></h4>
    <button id="healthyFood" class="roundButton"><i class="fas fa-fw fa-carrot"></i></button>
    <button id="unhealthyFood" class="roundButton"><i class="fas fa-fw fa-pizza-slice"></i></button>
  `;
  utils.printToDom('#eat', domString);
};

const addFullness = () => {
  full.setFull(10);
  printEat();
};

const subtractFullness = () => {
  full.setFull(-3);
  printEat();
};

const eatListeners = () => {
  document.querySelector('#eat').addEventListener('click', (e) => {
    if (e.target.id === 'healthyFood') { addFullness(); }
    if (e.target.id === 'unhealthyFood') { subtractFullness(); }
  });
};

export default { printEat, eatListeners };
