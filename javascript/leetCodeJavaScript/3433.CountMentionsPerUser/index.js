var countMentions = function(numberOfUsers, events) {
    let result = [];
    let users = {};
    let timeStampNow;

    events.sort((a, b) => {
        if(a[1] - b[1] === 0) return b[0].localeCompare(a[0]); ;
        return a[1] - b[1];  
    });

    for(let i = 0; i < numberOfUsers; i++){
        users[i] = {id:"id"+i, timeStamp: events[0][1], mentions: 0}
        result[i] = 0;
    }

    for (let i = 0; i < events.length; i++){
        timeStampNow = parseInt(events[i][1]);
        if (events[i][0] === "MESSAGE"){
            //console.log(`dia ${i}`,users[1])
            if(events[i][2] === "HERE"){
                for(let j = 0; j < numberOfUsers; j++) {
                    //console.log(users[j].timeStamp, timeStampNow, users[j].timeStamp <= timeStampNow)
                    if(users[j].timeStamp <= timeStampNow){
                        result[j]++;
                        
                       // console.log("oi")
                    }
                }
            }else if(events[i][2] === "ALL"){
                for(let j = 0; j < numberOfUsers; j++) {
                    result[j]++;
                }
            }else{
                for(let j = 0; j < numberOfUsers; j++) {
                    if(events[i][2].includes(users[j].id)){
                        //console.log(events[i][2].replaceAll(" ", ","))
                        let newArray = events[i][2].replaceAll(" ", ",").split(',');
                        let count = newArray.filter(item => item === users[j].id)
                        result[j] += count.length;
                    }
                }
            }
        }else {
            //console.log(60 + parseInt(events[i][1]))
            users[events[i][2]].timeStamp = (parseInt(events[i][1]) + 60)
        }

        
    }

    //console.log(events);

    return result
};

console.log(countMentions(15,[["MESSAGE","174","HERE"],["OFFLINE","426","0"],["MESSAGE","98","ALL"],["MESSAGE","383","ALL"],["MESSAGE","178","id13 id1 id6 id0 id8 id6 id0"],["OFFLINE","474","10"],["MESSAGE","190","ALL"],["MESSAGE","190","HERE"],["MESSAGE","366","ALL"],["OFFLINE","113","4"],["MESSAGE","130","HERE"],["OFFLINE","299","10"],["OFFLINE","352","8"],["MESSAGE","167","id12 id13 id2 id10"],["MESSAGE","120","ALL"],["MESSAGE","175","ALL"],["OFFLINE","150","2"],["MESSAGE","124","ALL"],["OFFLINE","70","13"]]))