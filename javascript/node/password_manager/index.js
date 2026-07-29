import bcrypt from "bcrypt";
import promptModule from "prompt-sync";
import { MongoClient, ReturnDocument } from "mongodb";

const dbUrl = "mongodb://localhost:27017";
const client = new MongoClient(dbUrl);
let hasPassword = false;
let passwordCollection, authCollection;
const dbName = "passwordManager";
const prompt = promptModule();
//const mockDB = { passwords: {} };

const savePassword  = async (password) => {
    const hash = bcrypt.hashSync(password, 10);
    await authCollection.insertOne({"type": "auth", hash})
    console.log("Password has been saved!");
    showMenu();
};

const comparePassword = async (password) => {
    const { hash } = await authCollection.findOne({"type": "auth"});
    return await bcrypt.compare(password, hash);
};

const promptNewPassword = () => {
    const response = prompt("Enter a main passsword:");
    return savePassword(response);
};

const promtpOldPassword = async () => {
    let verified = false;
    while(!verified){
        const response = prompt("enter a main password:");
        const result = await comparePassword(response);

        if(result){
            console.log("Password verified!!");
            verified = true;
            showMenu();
        }else{
            console.log("Password incorrect. Try again.");
        }
    }
};

const showMenu = async () => {
    console.log(`
        1. View passwords
        2. Manage new Password
        3. Verify password
        4. Exit   
        5. Find password by source 
    `);

    const response = prompt(">");

    switch (response) {
        case "1":
            await viewPasswords();
            break;
        case "2":
            await promptManageNewPassword();
            break
        case "3":
            await promtpOldPassword();
            break;
        case "4":
            process.exit();
        case "5":
            await findPassword();
            break;
        default: 
            console.log("That's an invalid response.");
            await showMenu();
    }

};

const viewPasswords = async () => {
    const passwords = await passwordCollection.find({}).toArray();
    passwords.forEach(({ source, password }, index) => {
        console.log(`${index+1}. ${source} => ${password}`)
    });
    showMenu();
};

const promptManageNewPassword = async () => {
    const source = prompt("Enter name for password: ");
    const password = prompt("Enter password to save: ");

    await passwordCollection.findOneAndUpdate(
        {source},
        {$set:{password}},
        {
            ReturnDocument: "after",
            upsert: true,
        }
    );
    console.log(`Password for ${source} has been saved`);
    showMenu();
};

const findPassword = async () =>{
    const source = prompt("Enter password name: ");

    const response = await passwordCollection.findOne({source: source});

    if(response){
        console.log(`${response.source} => ${response.password}`);
    }else{
        console.log('No password saved for that source!');
    }
    showMenu();
}

const main = async () => {
    try {
        await client.connect();
        console.log("Connect successfully to server");
        const db = client.db(dbName);
        authCollection = db.collection("auth");
        passwordCollection = db.collection("passwords");
        const hashedPassword = await authCollection.findOne({type: "auth"});
        hasPassword = !!hashedPassword;
    } catch (error) {
        console.error("Error connecting to the database: ", error);
        process.exit();
    }
};

await main();
if(!hasPassword)promptNewPassword();
else promtpOldPassword();
