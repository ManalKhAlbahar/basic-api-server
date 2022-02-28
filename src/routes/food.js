'use strict'

const express = require('express');
const { Food } = require('../models/index.js');
const router = express.Router();

router.post('/food', addFood);
router.get('/food', getFood);
router.get('/food/:id', getFoodById);
router.put('/food/:id', updateFood);
router.delete('/food/:id',deleteFood);

async function addFood(req, res) {
    let newFood = req.body;
    let food = await Food.create(newFood);
    res.status(201).json(food);
}

async function getFood(req, res) {
    let foodObject = await Food.findAll();
    res.status(200).json(foodObject);
}

async function getFoodById(req,res) {
    let getId = parseInt(req.params.id);
    let foodId = await Food.findOne({where:{id:getId}})
    res.status(200).json(foodId);
}

async function updateFood(req,res) {
    let body = req.body;
    let bodyId =req.params.id;
    let foodUpdate = await Food.findOne({where:{id:bodyId}});
    const UpdateFood = await foodUpdate.update(body);
    res.status(201).json(UpdateFood);
}

async function deleteFood(req,res) {
    let deleteId = parseInt(req.params.id);
    let deleteFood =await Food.destroy({where:{id:deleteId}});
    res.status(204).json(deleteFood);
}


module.exports = router;