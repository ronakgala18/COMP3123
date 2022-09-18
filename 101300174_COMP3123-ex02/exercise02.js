// exercise 1 
console.log("exercise 1");
const greetText = 'Hello ';
gretter = (myArray, counter) => {
    for(let x of myArray) {
        console.log(`${greetText}${x}`);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)
console.log()
console.log("exercise 2");
capatalize = value => {
    let stringArray = [...value[0].toUpperCase(), ...value.slice(1,).toLowerCase()];
    let newString = stringArray.join('');
    return newString
}
console.log(capatalize('fooBar'));
console.log(capatalize('nodeJs'));

console.log();
console.log("exercise 3");
const colors = ['red', 'green', 'blue']
capatalizecolor = value =>{
    const newArray = colors.map(capatalize);
    return newArray
}
console.log(capatalizecolor())
console.log();
console.log("exercise 4");

let values =[1, 60, 34, 30, 20, 5]
filterLessThan20 = value => {
    return value < 20;
}
let result = values.filter(filterLessThan20);
console.log(result)


console.log();
console.log("exercise 5");
const array = [1, 2, 3, 4]
findSum = array.reduce(function(a,b){
    return a+b;
}, 0)
findProduct = array.reduce(function(a,b){
    return a*b;
}, 1)

console.log(findSum) 
console.log(findProduct)

console.log()
console.log("exercise 6");
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    detail(){
        return "Model: "+ this.model+" Engine "+ this.year
    }
}
class Sedan extends Car {
    constructor(model, year,balance){
        super(model);
        this.balance= parseFloat(balance);
    }
    info(){
        return "Model: "+ this.model+" has a balance of $"+this.balance

    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.detail());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info())