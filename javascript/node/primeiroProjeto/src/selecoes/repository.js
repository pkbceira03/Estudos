import database from "../infra/database.js";

class selecaoRepository{
    async getAllSelecoes(){
        const result = await database.query({
            text:`
                SELECT
                    *
                FROM
                    selecao
                ;
            `
        })

        return result.rows;
    }

    async getSelecaoById(id){
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

        return result.rows[0];
    }

    async createSelecao(corpo){
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

        return result.rows[0]
    }

    async updateSelecao(corpo, hora, id){
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
        });

        return result.rows[0];
    }

    async deleteSelecao(id){
        await database.query({
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

        return
    }
}

export default new selecaoRepository