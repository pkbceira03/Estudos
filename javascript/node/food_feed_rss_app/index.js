import Parser from "rss-parser";
import promptModule from "prompt-sync";

const parser = new Parser();
const prompt = promptModule({sigint: true});

const url = [
    "https://bonappetit.com/feed/recipes-rss-feed/rss",
    "https://reddit.com/r/recipes/.rss"
];

const main = async () => {
    //const response = await fetch(url);
    //console.log(await response.text())
    //const {title, items} = await parser.parseURL(url);
    //console.log(title);
    //const results = items.map(({title,link}) => ({title,link}));
    //console.clear();
    //console.table(results);
    //console.log("Last Update", (new Date()).toUTCString());
    const filter = await prompt("Add a filter for you find recipes: ")
    console.log(filter)
    const  feedItems = [];
    const awaitableRequests = url.map(url =>parser.parseURL(url));
    const response = await Promise.all(awaitableRequests);
    aggregate(response, feedItems, filter);
    print(feedItems)
}

const aggregate = (response, feedItems, filter) => {
    for(let {items} of response){
        for(let {title, link, pubDate} of items){
            if(title.toLowerCase().includes(filter)){
                feedItems.push({title,link, pubDate});
            }
        }
    }

    return feedItems;
}

const print = (results) => {
    console.clear();
    const data = new Date();
    for(let item of results){
        if(item.pubDate){
            const dataPublicacao = new Date(item.pubDate);
            const diferencaEmMilissegundos = data - dataPublicacao;
            const horasAtras = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60));
            item.pubDate = `${horasAtras}h atrás`;
        }else{
            item.pubDate ='--'
        }
    }
    console.table(results);
    console.log("Last Update", (new Date()).toUTCString());
    const res = prompt('Add item: ');
    const [title, link] = res.split(',');
    if(![title,link].includes(undefined)) {
        results.push({title: title.trim(), link: link.trim()});
        
        console.log("\n--- Tabela Atualizada ---");
        console.table(results);
    }
}
main();
//setInterval(main, 600000);

