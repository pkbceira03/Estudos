import SentimentJournal from "./sentimentJournal.js";

const journal = new SentimentJournal();
await journal.fetachScore();

while(true) {
    await journal.printChart();
    await journal.promptEnter();
    await journal.analyzeSentiment();
}

/*import SpellChecker from 'spellchecker';
import natural from 'natural';
import { removeStopwords } from 'stopword';
import prompt from 'prompt';

SpellChecker.setDictionary('en_US', '/usr/share/hunspell');
//const inputSpring = 'I am feeling bad!'
const tokenizer = new natural.WordTokenizer();
prompt.start({});
prompt.message = '';

const correctSpelling = inputSpring => {
    const words = inputSpring.split(' ');
    const corrections = [];
    for(let word of words){
        if(SpellChecker.isMisspelled(word)){
            const options = SpellChecker.getCorrectionsForMisspelling(word);
            //console.log(options)
            corrections.push(options[0]);
        }else{
            corrections.push(word);
        }
    }
    return corrections.join(' ');
}

const tokenizeInput = inputSpring =>{
    return(tokenizer.tokenize(inputSpring))
}

const setWords = tokens => {
    const stems = [];
    for(let token of tokens){
        const stem = natural.PorterStemmer.stem(token);
        stems.push(stem)
    }
    return stems;
}

(async () => {
    try {
        const {inputSpring} = await prompt.get([{
            name: inputSpring,
            description: 'How do you feel?',
        }]);
        const correctedSpelling = correctSpelling(inputSpring);
        const tokens = tokenizeInput(correctedSpelling);
        //const stems = setWords(tokens)
        //const removedStopWords = removeStopwords(stems)
        const { SentimentAnalyzer, PorterStemmer } = natural;
        const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
        const sentimentResults = analyzer.getSentiment(tokens)
        console.log(sentimentResults)
    } catch (error) {
        console.log(`an error ocurred: ${error.message}`)
    }
})();*/
