const express = require('express');
const app = express();
// importar as rotas
const pages = require('./routes/routes')


app.get('/hello', (req, res) => {
    res.send('projecto de criação de tarefas')
})

// publicar rotas
app.use('/api/v1/tasks', pages)
app.use('/api/v1/tasks/:id', pages)


const port = 5000;
app.listen(port, () => {
    console.log(`Server runing in port ${port}`);
})
