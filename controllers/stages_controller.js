// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db
const { Op } = require('sequelize')

// FIND ALL STAGES
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            where: { 
                stage_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` } 
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND SPECIFIC STAGE BY ID
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = stages