const express = require('express')
const periodicTable = require('../helpers/elementsObject')
const router = express.Router()

const tableRows = []
const tableColumns = []

const tableRows2= []
const tableColumns2 = []

function tableFill(times, obj) {
    for (let i = 1; i<= times; i++) {
        obj.push(i)
    }
}

tableFill(18, tableRows)
tableFill(7, tableColumns)

tableFill(2, tableRows2)
tableFill(15, tableColumns2)

const elements = periodicTable.periodicTable


router.get('/', (req, res, next) => {

    res.status(200).render('home', {
        layout: false, 
        title: 'Tabla',
        tableRows: tableRows,
        tableColumns: tableColumns,
        tableRows2: tableRows2,
        tableColumns2: tableColumns2,
        element: elements[0],
        elementF: elements[1],

    })
})

module.exports = router;