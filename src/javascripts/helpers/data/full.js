import sleep from '../../components/sleep';

let full = 100;

const getFull = () => full;

const setFull = (increase) => {
  if (increase + full > 100) {
    full = 100;
    sleep.addEnergy(-increase);
    return full;
  }
  if (increase + full < 0) {
    full = 0;
    sleep.addEnergy(-increase);
    return full;
  }
  full += increase;
  sleep.addEnergy(-increase);
  return full;
};

export default { getFull, setFull };
