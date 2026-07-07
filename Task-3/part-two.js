function calDogAge(human_years_age) {
    let dog_years_age = human_years_age * 7;
    return dog_years_age;
}

let humYrsAge = prompt("Insert the human years age of your dog: ");
console.log(calDogAge(humYrsAge));
