import { existsSync } from "fs";
import { createInterface } from "readline";
import { promisify } from "util";
import { createObjectCsvWriter } from "csv-writer";

const csvWriter = createObjectCsvWriter({
    path: './contact.csv',
    append: existsSync('./contact.csv'),
    header:[
       {id: "name", title: "NAME"},
       {id: "email", title: "EMAIL"},
       {id: "number", title: "NUMBER"},
       {id: "createAt", title: "CREATEAT"},
    ]
})

class Person {
    constructor(name = '', number = '', email = '', createAt=new Date()){
        this.name = name;
        this.number = number;
        this.email = email;
        this.createAt = createAt;
    }

    async saveToCSV() {
        try {
            const {name,number,email,createAt}  = this;
            await csvWriter.writeRecords([{name,number,email,createAt}])
            console.log(`Sucess! ${this.name} saved!`);
        } catch (err) {
            console.error("Error:", err.message);
        }
    }
}

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineSync = promisify(readline.question).bind(readline);

const startApp = async() =>{
    let shouldContinue = true;
    while(shouldContinue){
        let name = await readLineSync("Contact name: ");
        while(name.length > 255 || name.trim() === ''){
            name = await readLineSync("Contact name need to be less then 255 caracter: ");
        }
         
        let numero = await readLineSync("Contact numero: ");
        while (!/^\d+\-\d+$/.test(numero)) {
            console.log('Enter a valid number')
            numero = await readLineSync("Contact numero only with numbers: ");
        }

        let email = await readLineSync("Contact email: ");
        while(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            console.log('Enter a valid emaill')
            email = await readLineSync("A Valid contact email: ");
        }

        let person = new Person(name, numero, email);
        person.saveToCSV();

        const response = await readLineSync("Continue? [y to continue]")
        shouldContinue = response.toLowerCase() === 'y';
    }
    readline.close();

}

startApp()