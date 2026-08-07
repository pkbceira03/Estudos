import Fastify from "fastify";
import fastifyFormBody from "@fastify/formbody";
import fastifyView from "@fastify/view";
import fastifyCookie from "@fastify/cookie";
import fastifySession from "@fastify/session";
import fastifyPassport from "@fastify/passport";
import handlebars from "handlebars";

import Account from "./models/Account.js";

const app = Fastify();
const port = 3000;

await app.register(fastifyFormBody);
await app.register(fastifyView, {
    engine: {handlebars},
    root: "views",
});
await app.register(fastifyCookie);
await app.register(fastifySession, {
   secret: 'a_very_secret_value_1!2@3#4$5%6^7&8*9(0)',
   cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
   } 
});
await app.register(fastifyPassport.initialize());
await app.register(fastifyPassport.secureSession());

fastifyPassport.registerUserSerializer(async (user, request) => user.username);
fastifyPassport.registerUserDeserializer(async (username, request) => {
    const account  = await Account.findByUsername(username);
    if(!account){
        throw new Error("User not found");
    }
    return account;
});

fastifyPassport.use("local", Account.genStrategy());
fastifyPassport.use("jwt", Account.genJWTStrategy());

const loginFormVars = {
    signup:{
        title: "Sign up",
        message: "Already have an account?",
        route: "/account",
        switchPage: "login",
        showExtraFields: true,
    },
    login: {
        title: "Log in",
        message: "Need to create a account?",
        route: "/auth",
        switchPage: "signup",
        showExtraFields: false,
    }
}


app.get("/", async(req, reply) => {
    const { page } = req.query;
    const formVars = loginFormVars[page] || loginFormVars.signup;
    return reply.view("index", formVars)
});

app.post("/account", async(req,reply) => {
    const {username, password} = req.body;
    try {
        await Account.register(username, password);
        return reply.send({message: "Account created."})
    } catch (error) {
        return reply.code(400).send({
            message: "Accounnt creation failed",
            error: error.message
        });
    }
})

app.post("/auth", async(req, reply) => {
    try {
        await fastifyPassport.authenticate("local", {authInfo: false}) (req, reply);
        if(req.user){
            const {username} = req.user;
            return reply.view("dashboard", { username });
        }
    } catch (error) {
        return reply.code(401).send({
            message: "Authentication failed",
            error: error.message
        });
    }
});

app.post("/api/auth", {preValidation:fastifyPassport.authenticate("local", {session:false})}, async(req,reply) => {
    const {user:account} = req;
    const token = account.signJWT();
    return reply.send({token});
});

app.get("/api/test", {preValidation:fastifyPassport.authenticate("jwt", {session:false})}, async(req,reply) => {
    return reply.send({status: "Autheticated"});
});

app.get("/logout", async(req, reply) => {
    await req.logout();
    reply.redirect("/")
});

app.get("/dashboard", async (req, reply) => {
    const auth = req.isAuthenticated();
    if(!auth){
        return reply.redirect("/?page=login")
    }

    return reply.view("dashboard");
});

try {
    const adress = await app.listen({port: port, host: "127.0.0.1"});
    console.log(`App listening an ${adress}`)
} catch (error) {
    console.log("Error", error.message);
    process.exit(1);
}
