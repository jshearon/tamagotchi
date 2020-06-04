const printToDom = (id, text) => {
  document.querySelector(id).innerHTML = text;
};

const randomNum = (max) => Math.round(Math.random() * max);

export default { printToDom, randomNum };
