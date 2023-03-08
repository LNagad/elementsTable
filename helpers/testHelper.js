const periodicTableHelper = require('../helpers/elementsObject')

const elements = periodicTableHelper.periodicTable
const elementSecond = periodicTableHelper.periodicTableBottom


let counter = 2
let counter2nd = 0

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


const secElementSymbol = () =>  {
    return elementSecond[counter2nd].symbol
}
const secElementGroup = () => {
    return elementSecond[counter2nd].group
}

const secIncrementCounter = () => {
    if (counter2nd === 29) {
        counter2nd = 0
    } else {
        counter2nd++
    }
}

exports.getElemento = elementoSymbol
exports.getElementoGroup = elementoGroup
exports.incrementCounter = incrementCounter

exports.getSecElement = secElementSymbol
exports.getSecElementGroup = secElementGroup
exports.secIncrementCounter = secIncrementCounter