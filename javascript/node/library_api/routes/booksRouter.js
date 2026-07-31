import Book from "../models/book.js";

async function booksRouter(fastify, _opts) {
    fastify.get("/:id", async (request, reply) => {
        const { id } = request.params;
        try {
            const book = await Book.findByPk(id);
            reply.send(book)
        } catch (error) {
            console.error("Error occured:", error.message)
            reply.send(error);
        }
    }),

    fastify.get("/", async (request,reply) => {
        try {
            const books = await Book.findAll();
            reply.send(books);
        } catch (error) {
            console.log("Error occured: ", error.message);
            reply.send(error)
        }
    })

    fastify.post("/", async (request, reply) => {
        const { title, author } = request.body;
        let book;
        try {
            const check = await Book.findOne({
                where: {title}
            });
            //console.log(check.dataValues.count)
            if(check){
                let newCount = check.dataValues.count + 1;
                book = await Book.update({count: newCount}, {
                    where: {title}
                })
            }else{
                book = await Book.create({title, author, count:1});
            }
            reply.send(book);
        } catch (error) {
            console.log("Error occured: ", error.message);
            reply.send(error)
        }
    }),

    fastify.put("/:id", async (request, reply) => {
        const { id } = request.params;
        const { title, author } = request.body;
        try {
            const book = await Book.update({title, author}, {
                where: {id},
            });
            reply.send(book);
        } catch (error) {
            console.log("Error occured: ", error.message);
            reply.send(error)
        }
    }),

    fastify.delete("/:id", async (request, reply) => {
        const { id } = request.params;
        try {
            const book = await Book.destroy({
                where: {id},
            });
            reply.send(book);
        } catch (error) {
            console.error("Error occured: ". erroe.message);
            reply.send(error)
        }
    });
}

export default booksRouter;
