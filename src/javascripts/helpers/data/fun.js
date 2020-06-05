let fun = 50;

const getFun = () => fun;

const setFun = (increase) => {
  if (increase + fun > 100) {
    fun = 100;
    return fun;
  }
  if (increase + fun < 0) {
    fun = 0;
    return fun;
  }
  fun += increase;
  return fun;
};

export default { getFun, setFun };
