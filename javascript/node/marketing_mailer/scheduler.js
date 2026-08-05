import { scheduleJob } from 'node-schedule';
import { sendEmail } from './service/mailer.js';
import { campaignMail } from './mailTemplate.js';

export const schedule = (timeOptions) => {
    scheduleJob(timeOptions, async () => {
        await sendEmail(
            "cabeceira2003@gmail.com",
            campaignMail("Promoção", "promo2", "cabeceira2003@gmail.com")
        )
    })
}
