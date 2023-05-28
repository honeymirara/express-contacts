const pool = require('../db');


async function getAllDataDB() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users '
    const result = (await client.query(sql)).rows;
    return result;
};

async function getDataById(id) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM users WHERE id = $1'
    const result = (await client.query(sql, [id])).rows;
    return result;
};



async function createDB(name, surname, birth, city, age) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const sql1 = `INSERT INTO users_info(birth, city, age) VALUES ($1, $2, $3) RETURNING *`
        const result1 = (await client.query(sql1, [birth, city, age])).rows

        const sql2 = `INSERT INTO users(name, surname, info_id) VALUES ($1, $2, $3) RETURNING *`;
        const result2 = (await client.query(sql2, [name, surname, result1[0].id])).rows;
        await client.query('COMMIT');
        return { ...result1[0], ...result2[0] } //влзращаем объект
    } catch (err) {
        await client.query('ROLLBACK');
        return null; //возращаем null
    }
};


async function updateData(name, surname, birth, city, age, id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const sql1 = `UPDATE users SET name = $1, surname = $2 WHERE info_id = $3 returning *`;
        const result1 = (await client.query(sql1, [name, surname, id])).rows;
        const sql2 = ` UPDATE users_info SET birth=$1, city=$2, age=$3 WHERE id = $4 returning *`;
        const result2 = (await client.query(sql2, [birth, city, age, id])).rows;
        await client.query('COMMIT');
        
        return { ...result1[0], ...result2[0]};

    } catch (err) {
        await client.query('ROLLBACK');
        return null;
    }
};

async function deleteDataById(id) {
    const client = await pool.connect();
    try {
        const sql1 = `DELETE FROM users WHERE info_id = $1 RETURNING *`;
        const data1 = (await client.query(sql1, [id])).rows;

        const sql2 = `DELETE FROM users_info WHERE id = $1 RETURNING *`
        const data2 = (await client.query(sql2, [id])).rows;
        await client.query('COMMIT');
        return { ...data1[0], ...data2[0] }
    } catch (err) {
        await client.query('ROLLBACK');
        return null;
    }

}




module.exports = { getAllDataDB, getDataById, createDB, updateData, deleteDataById };