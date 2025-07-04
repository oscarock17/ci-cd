const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    host: 'postgres', // nombre del servicio en docker-compose
    database: 'mydatabase',
    password: 'password',
    port: 5432,
});

const connect = async () => {
    try {
        await pool.query('SELECT 1'); // prueba sencilla para validar conexión
    } catch (err) {
        throw err;
    }
};

const getAllItems = async () => {
    const res = await pool.query('SELECT * FROM items');
    return res.rows;
};

const getItemById = async (id) => {
    const res = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    return res.rows[0];
};

const createItem = async (item) => {
    const res = await pool.query('INSERT INTO items(name, value) VALUES($1, $2) RETURNING *', [item.name, item.value]);
    return res.rows[0];
};

const updateItem = async (id, item) => {
    const res = await pool.query('UPDATE items SET name = $1, value = $2 WHERE id = $3 RETURNING *', [item.name, item.value, id]);
    return res.rows[0];
};

const deleteItem = async (id) => {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
};

const getAllUsers = async () => {
    const res = await pool.query('SELECT * FROM users LIMIT 10');
    return res.rows;
};


module.exports = {
    connect,
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    getAllUsers
};