const htmlTemplate = (content) => {
    return `<html>
    <body>
        ${content}
    </body>
    </html>`;
};

export const welcomeMail = () => {
    const content = '<h1>Welcome to In Box!</h1>'
    return htmlTemplate(content)
}

export const cofirmMail = (url) => {
    const content = `<a href='${url}'><h1>Confirm your email!</h1></a>`
    return htmlTemplate(content);
}

export const campaignMail = (campaignText, campaignKey, email) => {
    const content = `
        <h1>${campaignText}</h1>
        <img src="http://localhost:3000/campaign/${campaignKey}/user/${email}/image.png" style="display:none">
        <a href='http://localhost:3000/unsubscribe/${email}'><h1>Cancel!</h1></a>
        <a href='http://localhost:3000/click/${campaignKey}/user/${email}'><h1>Cancel!</h1></a>
    `;
    return htmlTemplate(content);
}
