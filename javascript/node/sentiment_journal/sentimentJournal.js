import Sentiment from 'sentiment';
import SpellChecker from 'spellchecker';
import { SentimentScore } from './db.js';
import prompt from 'prompt';
import asciichart from 'asciichart';

prompt.start({});
prompt.message = '';

const chartConfig ={
    min: -1,
    max:1,
    height: 10,
}

class SentimentJournal {
    constructor () {
        this.sentiment = new Sentiment();
        this.scores = [0];
        this.entry = '';
    }

    correctSpelling(inputSpring) {
        const words = inputSpring.split(' ');
        const corrections = [];
        for(let word of words){
            if(SpellChecker.isMisspelled(word)){
                const options = SpellChecker.getCorrectionsForMisspelling(word);
                //console.log(options)
                corrections.push(options[0]);
                //console.log("word corrected.")
            }else{
                corrections.push(word);
                //console.log("use the same word.")
            }
        }
        return corrections.join(' ');
    }

    async saveScore(score) {
        await SentimentScore.create({score});
    }

    async fetachScore() {
        const results = await SentimentScore.findAll({limit:100});
        if(results.length){
            this.scores = results.map(({score}) => score);
        }
    }

    async analyzeSentiment() {
        if(!this.entry || this.entry === '') return;
        const { score } = this.sentiment.analyze(this.entry);
        const normalizeScore = Math.min(Math.max(score / 10, -1), 1);
        await this.saveScore(normalizeScore);
        this.scores.push(normalizeScore);
    }

    async promptEnter() {
        const {response} = await prompt.get([{
            name: 'response',
            description: 'How do you fell?'
        }]);
        this.entry = this.correctSpelling(response);
    }

    setChartColor() {
        if(!this.scores.length)return;
        const recentScore = this.scores[this.scores.length - 1];
        if(recentScore < 0){
            chartConfig.colors = [asciichart.red];
            this.chartTitle = "Negative";
            
        }else{
            chartConfig.colors = [asciichart.green];
            this.chartTitle = "Positive";
        }
    }

    printChart() {
        console.clear();
        this.setChartColor();
        console.log(this.chartTitle);
        console.log(asciichart.plot([this.scores], chartConfig));
    }
}

export default SentimentJournal;
