let strength = 100;

const getStrength = () => strength;

const setStrength = (increase) => {
  if (increase + strength > 100) {
    strength = 100;
    return strength;
  }
  if (increase + strength < 0) {
    strength = 0;
    return strength;
  }
  strength += increase;
  return strength;
};

export default { getStrength, setStrength };
