const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let students = [
    { id: 1, name: 'thakdanai', email: 'thakdanai@gmail.com' },
    { id: 2, name: 'nattisa', email: 'nattisa@gmail.com' }
]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/students', (req, res) => {
    let student = req.body
    students.push(student)
    res.json(student)
})
app.get('/students', (req, res) => {
    res.json(students)
})


app.get('/greeting', (req, res) => {
    res.json({ message: 'Hello!' })
})

module.exports = app