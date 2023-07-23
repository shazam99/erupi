const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '172.17.0.3',
    database: 'erupi',
    password: 'Sid@8800629814',
    port: 5432,
})

const createUser = (request, response) => {
    const { username, email, password } = request.body.form
    console.log(request.body.form)

    pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password], (error, results) => {
        if (error) {
            throw error
        }
    })
}

module.exports = {
    createUser,
}