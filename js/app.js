const year = parseInt(prompt("What is your birth year?"));
const city = prompt("What is your City?");
const sport = prompt("What is your favorite sport?");
// let year = false;
// let city = "Kiyv";
// let sport= "Checkers";
let ageResponse;
let cityResponse;
let sportResponse;
const currentYear= (new Date()).getFullYear();
const citiesCapitals = {"Kiyv":"Ukraine","Washington":"USA","London":"Great Britain"}
const sportChampions = {"Box":"Klichko","Swimming":"Klochkova","Checkers":"neighbour alcoholic"}
let age = currentYear-year

ageResponse=("Your age is "+age)

if (year){
    ageResponse=("Your age is "+age)
} else {
    ageResponse=("You didn't fill the 'Year' raw")
}

if (city) {
    if (city in citiesCapitals) {
        cityResponse=("You are living in the capital of "+citiesCapitals[city]);
    } else {
        cityResponse=("You are living in "+ city)
    }
} else {
    cityResponse=("You didn't fill the 'City' raw")
}

if (sport){
    if (sport in sportChampions) {
        sportResponse=("Do you wanna become "+sportChampions[sport]+"?");
    } else {
        sportResponse=("You like "+ sport)
    }     
} else {
    sportResponse=("You didn't fill the'Sport' raw")
}
alert(ageResponse+". "+cityResponse+". "+sportResponse)