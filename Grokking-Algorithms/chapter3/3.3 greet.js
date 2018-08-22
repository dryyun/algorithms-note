"use strict";

function greet2(name) {
    console.log(`how are you, ${name} ? `);
}

function bye() {
    console.log('ok bye!');
}

function greet(name) {
    console.log(`hello, ${name} !`);
    greet2(name);
    console.log('greeting ready to say bye ...');
    bye();
}

greet('dryyun');