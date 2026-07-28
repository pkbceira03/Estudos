import Fastify from "fastify";
import ejs from "ejs";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import {join} from "path";

import menu from "./data/menuItems.js";
import hours from "./data/operatingHours.js"

const app = Fastify();
const port = 3000;
const publicPath = join(process.cwd(), "public");

app.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
});

app.register(fastifyStatic, {
    root:publicPath,
    prefix: "/public/"
})

app.get('/', async (req, reply) => {
    return reply.view("view/index.ejs", {name: "What's Fare is Fair"});
});

app.get('/menu', async (req, reply) => {
    return reply.view("view/menu.ejs", {menu})
});

app.get('/hours', async (req, reply) => {

    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];

    const today = new Date;
    const weekday = today.getDay()

    return reply.view("view/hours.ejs", {hours, days, weekday});
});

app.get('/about', async (req, reply) => {
    return reply.view("view/about.ejs")
})

await app.listen({port});
console.log(`Web server is listening at http://localhost:${port}`);