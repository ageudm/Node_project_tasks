// geriri os a requisição e o envio de dados ao servidor de forma separada

const getAllTasks = (req, res) => {
    res.send('all item')
}

const createTask = (req, res) => {
    res.send('criar task')
}

const getTask = (req, res) => {
    res.send('pegar task')
}

const updateTask = (req, res) => {
    res.send('actualizar task')
}

const deleteTask = (req, res) => {
    res.send('eliminar task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}