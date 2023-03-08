const periodicTableHelper = require("./elementsObject");

const elements = periodicTableHelper.periodicTable;
const elementSecond = periodicTableHelper.periodicTableBottom;

let counter = 2;
let counter2nd = 0;

const elementoSymbol = () => elements[counter].symbol;

const elementoGroup = () => (elementS = elements[counter].group);

const incrementCounter = () => {
  
  if (counter === 89) {
    counter = 2;
    
  } else {
    
    if (elements.length < 90) {
      // Aqui se obtiene el lenght actual y se inserta el bloque negro donde falte el index
      elements.splice(elements.length, 0, {symbol:"",group:"column"})
    }
    counter++;
  }
};

const secElementSymbol = () => elementSecond[counter2nd].symbol;

const secElementGroup = () => elementSecond[counter2nd].group;

const secIncrementCounter = () => {
  if (counter2nd === 29) {
    counter2nd = 0;
  } else {
    counter2nd++;
  }
};

exports.getElemento = elementoSymbol;
exports.getElementoGroup = elementoGroup;
exports.incrementCounter = incrementCounter;

exports.getSecElement = secElementSymbol;
exports.getSecElementGroup = secElementGroup;
exports.secIncrementCounter = secIncrementCounter;
