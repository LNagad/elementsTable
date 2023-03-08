const express = require('express')

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

router.get('/', (req, res, next) => {

    res.status(200).render('home', {
        layout: false, 
        title: 'Home page',
        tableRows: tableRows,
        tableColumns: tableColumns
    })
})


module.exports = router;