"use strict";

var voted = new Set();

function check_voter(name) {
    if (voted.has(name)) {
        console.log('kick them out');
    } else {
        voted.add(name);
        console.log('let them vote');
    }
}

check_voter("tom");
check_voter("mike");
check_voter("mike");
