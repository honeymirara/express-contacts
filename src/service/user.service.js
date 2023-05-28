const { getAllDataDB, getDataById, createDB, updateData, deleteDataById } = require('../repository/user.repository');


async function getAllData() {
    const data = await getAllDataDB()
    if (!data.length) throw new Error('db is empty');
    return data;
};

async function getById(id) {
    const data = await getDataById(id);
    if (!data.length) throw new Error('item of this id is not found');
    return data;
};

async function createData(name, surname, birth, city, age) {
    const data = await createDB(name, surname, birth, city, age);
    if (!data) throw new Error('item is not created');
    return data;
};

async function updateDataDB(name, surname, birth, city, age, id) {
    const data = await updateData(name, surname, birth, city, age, id);
    if (!data) throw new Error('item is not found');
    return data;
};

async function deleteDataByIdDB(id) {
    const data = await deleteDataById(id);
    if(!data) throw new Error('item is not found');
    return data;
};

module.exports = { getAllData, getById, createData, updateDataDB, deleteDataByIdDB };