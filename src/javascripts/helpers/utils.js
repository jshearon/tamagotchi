const printToDom = (id, text) => {
  document.querySelector(id).innerHTML = text;
};

const randomNum = (max) => Math.round(Math.random() * max) + 1;

export default { printToDom, randomNum };
