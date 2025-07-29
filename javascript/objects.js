// function isEmpty(obj){
//     for(let key in obj){
//         console.log(false)
//         return
//     }
//     console.log(true)
// }

// let schedule = {};

// isEmpty(schedule)

// schedule["8:30"] = "get up";

// isEmpty(schedule)


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// // let sum = salaries.Ann + salaries.John + salaries.Pete
// let sum=0
// for( let key in salaries){
//     sum += salaries[key]
// }
// console.log(sum)



function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key]== 'number'){
            obj[key]*=2
            console.log(obj[key])
        }
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu)






