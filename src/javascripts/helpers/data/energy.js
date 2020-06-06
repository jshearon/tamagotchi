let energy = 50;

const getEnergy = () => energy;

const setEnergy = (increase) => {
  if (increase + energy > 100) {
    energy = 100;
    return energy;
  }
  if (increase + energy < 0) {
    energy = 0;
    return energy;
  }
  energy += increase;
  return energy;
};

export default { getEnergy, setEnergy };
