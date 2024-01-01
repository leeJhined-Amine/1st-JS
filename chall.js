//ChallengeOne
let message = "There is no war in Ba Sing Se";
let words = message.split(' ');
console.log('There are ', words.length, ' words in the message.');

//ChallengeTwo
let countries = ['China','Japan','South Korea','Vietnam','Malaysia'];
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];

for (let i=0;i<5;i++){
    console.log(countries[i] +' has the capital named: '+capital[i]);
}

//challengeThree
let randomizer= Math.floor(Math.random() * 3);
if(randomizer==0){
    console.log("Your fate is a certain victory");
}
else if(randomizer==1) {
    console.log("Your fate is not so certain victory");
}
else if(randomizer==2){
    console.log("Your fate is an uneasy victory");
}
else{
    console.log("Your fate is unclear, ô chosen undead");
}

//challengeFour
function checkSeason(month){
    if (month == 12 || month == 1 || month == 2){
        return ("winter");
    }
    else if (month == 3 || month ==4|| month ==5){
        return ("spring");
    }
    else if (month ==6 || month ==7|| month ==8){
        return ("summer");
    }
    else if(month == 9 || month == 10 || month == 11){
        return ("autumn")
    }
    else {
        return ("Invalid Month Number, Must be between 1 and 12");
    }
}
console.log(checkSeason())