const express = require('express');
const { getAllData, getById, createData, updateDataDB, deleteDataByIdDB } = require('../service/user.service');
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
        const { id } = req.params;
        const data = await getById(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { name, surname, birth, city, age } = req.body;
        const data = await createData(name, surname, birth, city, age);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, birth, city, age } = req.body;
        const data = await updateDataDB(id, name, surname, birth, city, age);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteDataById(id)
        res.send(data);
    } catch (err) {
        res.send(err);
    }
})


module.exports = route;
