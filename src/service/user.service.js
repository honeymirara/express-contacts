const {getAllDataDB, getById, createData} = require('../repository/user.repository');


async function getAllData(){
    const data = await getAllDataDB()
    return data;
}

async function getDataById(){
    const data = await getById()
    return data;
}

async function createDB(){
    const data = await createData()
    return data;
}

module.exports = {getAllData, getDataById, createDB};