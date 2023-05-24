const express = require('express');
const { getAllData, getDataById, createDB } = require('../service/user.service');
const route = express.Router();

route.get(`/`, async (req, res) => {
    try {
        const data = await getAllData();
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const data = await getDataById(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.post('/', async (req, res) =>{
    try{
        const{name, surname, birth, city, age} = req.body;
        const data = await createData(name, surname, birth, city, age);
        res.send(data);
    }catch(err){
        res.send(err)
    }
})


module.exports = route;