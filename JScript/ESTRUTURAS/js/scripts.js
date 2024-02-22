// Variaveis + prompt + Math
let nome = "Pedro";

const idade = 43;

// const age = prompt("Que idade tens?");

// console.log('Tu tens',age,'anos');

// console.log(Math.max(5, 8, 2));

// console.log(Math.floor(6,7));

// console.log(Math.ceil(6,3));
/*
function primFunc() {
    console.log(Math.max(5, 8, 2));
}

primFunc();

const secFunc = function (){
    console.log(Math.min(5, 8, 2));
}

secFunc();


function printStuff(txt){
    console.log('imprimir:', txt)
}

printStuff("teste 1");

const peso = prompt("quanto pesas? (Kg)");
const altura = prompt("Qual a tua altura? (m)");

function imc(p, a){
    return p / (a * a)
}

const result = imc(peso, altura);

console.log(result);
*/

// Abrangencia das funcoes

// let y = 10;

// function testAbrang(){
//     let y = 20;
//     console.log('O Y dentro da função é', y);
// }

// testAbrang();

// console.log('Y fora da função é', y);
// testAbrang();

// Arrow function

// const testArrow = () => {
//     console.log('Arrow function is here', y);
// }

// testArrow();

// const parImpar = (n) => {
//     if (n % 2 === 0){
//         console.log("Par");
//         return;
//     }
//     console.log("Impar");
// };

// parImpar(8);

// parImpar(5);

// function testAbrang(m){
//     if (m % 2 === 0){
//         console.log("Par");
//         return;
//     }
//     console.log("Impar");
// }

// testAbrang(3);
// testAbrang(200);

// More Arrow Functions

const d = 4;

const raizQ = (d) => {
    return d * d;
}
console.log(raizQ(d));

// Default value

const customGreeting = (name, greet = "Olá") => {
    return greet + (' ') +name;
}

console.log(customGreeting("Pedro"));
console.log(customGreeting("João", "Bom dia!"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++){
        console.log(text);
    }
};

repeatText("Testing");
repeatText("Repeat 5 times", 5);

// Closure

function xFunc (){
    let txt = "coisa";

    function display(){
        console.log(txt);
    }

    display();
}

xFunc();

const multiplC = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplC(5);
const c2 = multiplC(9);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(9));