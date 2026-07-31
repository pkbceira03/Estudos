import Fastify from "fastify";
import formbody from "@fastify/formbody";
import routes from "./routes/index.js";

const app = Fastify();
const port = 3000;

await app.register(formbody);

app.get("/", async (_req, reply) => {
    reply.send({message: "ok"});
});

app.register(routes, { prefix: "/api" });

app.setNotFoundHandler((request, reply) => {
    const { message, statusCode } = request.error || {};
    reply.status(statusCode || 500 ).send({ message });
});

try {
    await app.listen({port: port});
    console.log(`Listening at http://localhost:${3000}`)
} catch (error) {
    console.error(error);
    process.exit(1);
}
