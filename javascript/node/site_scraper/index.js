//import { load } from 'cheerio';
import puppeteer from 'puppeteer';
//import promptModule from "prompt-sync";
import Fastify from "fastify";

//const prompt = promptModule();

//const response = prompt("Enter your filter:").trim();
const port = 3000;
const app = Fastify();

app.get("/articles/:filter", async (req, reply) => {
    try {
        const {filter} = req.params

        const url = "https://medium.com/tag/nodejs"

        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        await page.setUserAgent(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36" +
            "(KHTML, like Gecko) Chorme/118 Safari/537.36"
        );

        await page.goto(url, { waitUntil: "networkidle2" });

        (await page.waitForTimeout?.(3000)) ??
            (await new Promise((r) => setTimeout(r,3000)));

        const articles = await page.$$("article");
        const results = []
        for(const el of articles){
            const title = await el
                .$eval("h2", (el) => el.textContent.trim())
                .catch(() => null);
            
            const url2 = await el
                .$eval("a", (el) => el.href)
                .catch(() => null);
            
            if(title && url2){
                if(title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
                    results.push({
                        title: title,
                        link: url2
                    })
                }
            }
        }

        reply.send(results);
    } catch (error) {
        console.error(`An error occured: ${error.messase}`);
    }
})



try {
    await app.listen({port});
    console.log(`Server running at http://localhost:${port}`)
} catch (error) {
    console.error(`An error occured: ${error.messase}`);
    process.exit(1);
}

/*try {
    const response = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
    });
    const text = await response.text();
    // console.log(text)
    const $ = load(text);
    const elements = $("article");
    elements.each((i, element) => {
        const title = $(element).find("h2").text();
        const link = $(element).find("a").attr("href");
        console.log(title, link)
        //console.log($(element).text());
    });
} catch (error) {
    console.log("error", error.message);
}*/