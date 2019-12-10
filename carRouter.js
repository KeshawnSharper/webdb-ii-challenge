const express = require('express')
const carRouter= express.Router()
const db = require('./data/dbConfig.js');
carRouter.get('/', (req,res) => {
    db('cars').then(i => res.status(200).json(i))
})
carRouter.get('/:id', (req,res) => {
    const {id} = req.params
    db('cars').select('*').where({id}).then(i => res.status(200).json(i))
})
carRouter.post('/', (req,res) => {
    const accountsData = req.body 
    db('cars').insert(accountsData).then(i => res.status(201).json(i))
})
carRouter.put('/:id', (req,res) => {
    const {id} = req.params
    db('cars').where({id}).update(req.body).then(i => res.status(200).json(i))
})
carRouter.delete('/:id', (req,res) => {
    const {id} = req.params
    db('cars').where({id}).del().then(i => res.status(200).json(i))
})




module.exports = carRouter 