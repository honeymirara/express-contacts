const express = require('express');
const { isValidUserId, isValidBody } = require('../helper/validation');
const { getAllData, getById, createData, updateDataDB, deleteDataByIdDB } = require('../service/user.service');
const { buildResponse } = require("../helper/buildResponse");
const route = express.Router();

route.get(`/`, async (req, res) => {
    try {
        const data = await getAllData();
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.get('/:id', isValidUserId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getById(id);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.post('/', isValidUserId, isValidBody, async (req, res) => {
    try {
        const { name, surname, birth, city, age } = req.body;
        const data = await createData(name, surname, birth, city, age);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.put('/:id', isValidUserId, isValidBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, birth, city, age } = req.body;
        const data = await updateDataDB(id, name, surname, birth, city, age);
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.delete('/:id', isValidUserId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteDataByIdDB(id)
        res.send(data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})


module.exports = route;
