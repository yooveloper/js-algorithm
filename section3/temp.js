function Food() {}

Food.prototype.korea = 'kimchi';
Food.prototype.japan = 'sushi';

let korea = new Food();
let japan = new Food();

console.log(korea.japan);
