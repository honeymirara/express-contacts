const { getAllDataDB, getDataById, createDB, deleteDataById} = require('../repository/user.repository');


async function getAllData() {
    const data = await getAllDataDB()
    return data;
}

async function getById(id) {
    const data = await getDataById(id)
    return data;
}

async function createData(name, surname, birth, city, age) {
    const data = await createDB(name, surname, birth, city, age)
    return data;
}

async function deleteDataByIdDB(id) {
    const data = await deleteDataById(id);
    return data;
}

module.exports = { getAllData, getById, createData, deleteDataByIdDB };