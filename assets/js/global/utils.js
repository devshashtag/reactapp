const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `please check '${selection}' selector, no such element exist`
  );
};

const separate = (Number) => {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
};


// toggle multiple classes for an element
const toggleClasses = (el, ...cls) => cls.map(cl => el.classList.toggle(cl));


export { getElement, separate, toggleClasses };
