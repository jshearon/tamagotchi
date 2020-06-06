import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import drawPet from './components/drawPet';
import fight from './components/fight';

const init = () => {
  eat.printEat();
  eat.eatListeners();
  play.printPlay();
  play.playListeners();
  drawPet.eyesOpen();
  fight.fightListeners();
  fight.printFight();
};

init();
