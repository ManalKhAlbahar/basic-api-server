'use strict'

const express = require('express');
const {Clothes} = require('../models/index.js');
const router = express.Router();

router.post('/clothes',addClothes);
router.get('/clothes',getClothes);
router.get('/clothes/:id',getClothesById);
router.put('/clothes/:id',updateClothes);
router.delete('/clothes/:id',deleteClothes);

async function addClothes(req, res) {
    let newClothes = req.body;
    let clothes = await Clothes.create(newClothes);
    res.status(201).json(clothes);
}

async function getClothes(req, res) {
    let clothesObject = await Clothes.findAll();
    res.status(200).json(clothesObject);
}

async function getClothesById(req,res) {
    let getId = parseInt(req.params.id);
    let clothesId = await Clothes.findOne({where:{id:getId}})
    res.status(200).json(clothesId);
}

async function updateClothes(req,res) {
    let body = req.body;
    let bodyId =req.params.id;
    let clothesUpdate = await Clothes.findOne({where:{id:bodyId}});
    const Updateclothes = await clothesUpdate.update(body);
    res.status(201).json(Updateclothes);
}

async function deleteClothes(req,res) {
    let deleteId = parseInt(req.params.id);
    let deleteClothes =await Clothes.destroy({where:{id:deleteId}});
    res.status(204).json(deleteClothes);
}


module.exports = router;