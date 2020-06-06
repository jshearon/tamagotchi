import utils from '../helpers/utils';
import './drawPet.scss';
import pet from '../helpers/data/pet';

const drawPet = (array) => {
  let domString = '';
  for (let y = 0; y < 17; y += 1) {
    for (let x = 0; x < 16; x += 1) {
      domString += `<div class="${array[y].includes(x + 1) ? 'black-pixel' : 'white-pixel'}"></div>`;
    }
  }
  utils.printToDom('#pet', domString);
};

const eyesClosed = () => {
  drawPet(pet.blink);
  // eslint-disable-next-line no-use-before-define
  setTimeout(eyesOpen, Math.random() * (500 - 250));
};

const eyesOpen = () => {
  drawPet(pet.mainPose);
  setTimeout(eyesClosed, 3000);
};

export default { drawPet, eyesOpen, eyesClosed };
