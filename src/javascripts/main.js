import '../styles/main.scss';
import eat from './components/eat';

const init = () => {
  eat.printEat();
  eat.eatListeners();
};

init();
