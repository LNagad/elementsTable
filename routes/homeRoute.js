const express = require('express')
const periodicTable = require('../helpers/elementsObject')
const router = express.Router()

const tableRows = []
const tableColumns = []


function tableFill(times, obj) {
    for (let i = 1; i<= times; i++) {
        obj.push(i)
    }
}


tableFill(18, tableRows)
tableFill(7, tableColumns)

const elements = periodicTable.periodicTable


router.get('/', (req, res, next) => {

    res.status(200).render('home', {
        layout: false, 
        title: 'Home page',
        tableRows: tableRows,
        tableColumns: tableColumns,
        element: elements[0],
        elementF: elements[1],

    })
})


module.exports = router;