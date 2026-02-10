import express from 'express';
import database from './infra/database.js';
import 'dotenv/config'

const app = express();
app.use(express.json());


function findById(id){
    return selecoes.filter(p => p.id == id)
}

function findIndex(id){
    return selecoes.findIndex(p => p.id == id)
}

app.get('/selecoes', async (req, res) => {
    const result = await database.query({
        text:`
            SELECT
                *
            FROM
                selecao
            ;
        `
    })
    res.status(200).json(result.rows)
})

app.get('/selecoes/:id', async (req, res) => {
    const id = req.params.id
    const result = await database.query({
        text:`
            SELECT
                *
            FROM
                selecao
            WHERE
                id = $1
            ;
        `,
        values: [id]
    })
    res.status(200).json(result.rows[0])
})

app.post('/selecoes', async (req,res) => {
    let corpo = req.body;
    const result = await database.query({
        text: `
            INSERT INTO
                selecao (selecao, grupo)
            VALUES
                ($1, $2)
            RETURNING
                *
            ;  
        `,
        values: [
            corpo.selecao,
            corpo.grupo
        ]
    })

    res.status(201).json(result.rows[0])
})

app.delete('/selecoes/:id', async (req, res) => {
    const id = req.params.id;
    const result = await database.query({
        text: `
            DELETE
            FROM
                selecao
            WHERE
                id = $1
            ;
        `,
        values: [id]
    })
    res.status(204).send()
})

app.put('/selecoes/:id', async (req, res) => {
    const id = req.params.id;
    let corpo = req.body;
    let hora = new Date()
    const result = await database.query({
        text: `
            UPDATE
                selecao
            SET
                selecao = $1,
                grupo = $2,
                update_at = $3
            WHERE
                id = $4
            ;
        `,
        values: [
            corpo.selecao,
            corpo.grupo,
            hora,
            id
        ]
    })
    console.log(result)
    res.status(200).json(result.rows[0])
})

export default app;
