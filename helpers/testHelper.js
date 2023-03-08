const periodicTable = require('../helpers/elementsObject')

const elements = periodicTable.periodicTable

let counter = 2

const elementoSymbol = () => {
    const elementS = elements[counter].symbol
  
    return elementS
}
const elementoGroup = () => {
    const elementS = elements[counter].group
  
    return elementS
}

const incrementCounter = () => {
    if (counter === 89) {
        counter = 2
        
    } else {
        counter++
    }
}

exports.getElemento = elementoSymbol
exports.getElementoGroup = elementoGroup
exports.incrementCounter = incrementCounter