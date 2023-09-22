// Code your solutions in this file

// for (let age = 24; age<30; age++){
//     console.log(`I'm ${age} years old. Happy brithday to me!`);
//     debugger;
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i=0; i<gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//     }

//     return gifts;
// }

// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]; 

function writeCards(names, events) {
    const emptyArray = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        emptyArray.push(message);
    }
    return emptyArray;
}

// for (const i of  names){
//     console.log(``)
// }

function countDown(num) {
    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}

