import Fastify from "fastify";
import formBody from "@fastify/formbody";
import 'dotenv/config';

import { sendEmail } from "./service/mailer.js";
import { welcomeMail,cofirmMail, campaignMail } from "./mailTemplate.js";
import Lead from "./db.js";
import { schedule } from "./scheduler.js";

//schedule({ seconds: 30 })

const app = Fastify();
const port = process.env.PORT
await app.register(formBody);

app.post('/subscribe', async (req, reply) => {
    try {
        const {email} = req.body;
        console.log(`A new email: ${email}`);
        await Lead.create({email})
        await sendEmail(email, cofirmMail(`http://localhost:3000/verify/${email}`));
        reply.send({ message: 'ok' })
    } catch (error) {
        console.error(`An error occured: ${error.messase}`);
    }
});

app.get('/subscribe', async (req, reply) => {
    try {
        const emails = await Lead.findAll();
        //console.log(emails);
        reply.send(emails)
    } catch (error) {
        console.error(`An error occured: ${error.messase}`);
    }
});

app.get('/verify/:email', async (req,reply) => {
    const { email } = req.params;
    try {
        const lead = await Lead.findOne({ where: {email} });
        if(lead){
            lead.verified = true;
            await lead.save();
            console.log(`${email} is verified!`);
            reply.send({message: "Verified!"});
        }

    } catch (error) {
        console.error(`An error occured: ${error.messase}`);
    }
    reply.send({message: "Unable to verified!"});
});

const transparentPixel = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    "base64"
);

app.get('/campaign/:campaignKey/user/:email/image.png', async (req, reply) => {
    const { campaignKey, email } = req.params;
    
    try {
        const lead = await Lead.findOne({ where: { email } });
        
        if (lead && !lead.unsubscribe) {
            lead.lastCampaign = campaignKey;
            await lead.save();
            console.log(`${email} opened ${campaignKey}`);
        }
    } catch (error) {
        console.error(`An error occured: ${error.message}`);
    }

    reply.type('image/png').send(transparentPixel);
});

app.get('/campaign', async (req,reply) => {
    try {
        const lead = await sendEmail("cabeceira2003@gmail.com", campaignMail("Special", "promo1", "cabeceira2003@gmail.com"));
        reply.send(lead)
    } catch (error) {
        console.error(`An error occured: ${error.messase}`);
    }
    
})

app.get('/unsubscribe/:email', async (req, reply) => {
    const {email} = req.params
    const lead = await Lead.findOne({ where: {email}});
    if(lead){
        lead.unsubscribe = true;
        await lead.save();
        reply.send({message: "usuer unsubscribe"})
    }
});

app.get('/click/:campaignKey/user/:email', async (req, reply) => {
    const {email,campaignKey} = req.params;

    try {
        const lead = await Lead.findOne({ where: {email}});
        if(lead){
        lead.LastClickedCampaign = campaignKey;
        await lead.save();
        reply.send({message: "usuer unsubscribe"})
    }
    } catch (error) {
        console.error(`An error occured: ${error.messase}`);
    }
});

try {
    await app.listen({port});
    console.log(`Server running at http://localhost:${port}`)
} catch (error) {
    console.error(`An error occured: ${error.messase}`);
    process.exit(1);
}
