let full = 100;

const getFull = () => full;

const setFull = (increase) => {
  if (increase + full > 100) {
    full = 100;
    return full;
  }
  full += increase;
  return full;
};

export default { getFull, setFull };
