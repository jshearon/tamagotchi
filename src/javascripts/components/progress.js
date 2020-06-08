import energy from '../helpers/data/energy';
import full from '../helpers/data/full';
import fun from '../helpers/data/fun';
import strength from '../helpers/data/strength';
import utils from '../helpers/utils';
import './progress.scss';

const currentProg = () => (energy.getEnergy() + full.getFull() + fun.getFun() + strength.getStrength()) / 4;

const progBar = () => {
  let domString = '';
  domString += `
    <div id="progress-container">
      <div id="outer-prog-bar">
        <div id="inner-prog-bar"><h4>Total Progress: <span id="total-progress"></span></h4></div>
      </div>
    </div>
  `;
  utils.printToDom('#progress', domString);
};

const setProgress = () => {
  document.querySelector('#inner-prog-bar').style.width = `${currentProg()}%`;
  utils.printToDom('#total-progress', `${Math.floor(currentProg())}%`);
};

export default { progBar, setProgress };
