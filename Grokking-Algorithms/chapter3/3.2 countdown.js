"use strict";

function countdown(i) {
    console.log(i);
    if (i <= 1) {
        return;
    }
    return countdown(i - 1);
}

countdown(5);