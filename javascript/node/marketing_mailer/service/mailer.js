import { createTransport } from "nodemailer";
import 'dotenv/config';

const transporter = createTransport ({
    service: process.env.SERVICE,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    },
});

const html = `
    <html>
        <body>
            <h1>Confirm Your Email</h1>
        </body>
    </html>
`;

export const sendEmail = async (to, html) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject: "EMail from In Box.",
        html,
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${(info).response}`)
    } catch (error) {
        console.log(`An errror ocurred: ${error.message}`)
    }
}
