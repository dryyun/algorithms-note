/**
 * 教室调度问题
 */
"use strict";

var lessons = {
    'art': [900, 1000],
    'english': [930, 1030],
    'math': [1000, 1100],
    'computer': [1030, 1130],
    'music': [1100, 1200],
};

function nextLesson(currentLesson) {
    let minEnd = 99999;
    let lesson = null;
    Object.keys(lessons).forEach(l => {
        let c = true;
        if (currentLesson && lessons[l][0] < lessons[currentLesson][1]) { // 大于等于上一节课的结束时间
            c = false;
        }

        if (c && minEnd > lessons[l][1]) {
            minEnd = lessons[l][1];
            lesson = l;
        }

    });
    return lesson;
}

var nl = null;
nl = nextLesson(nl);
while (nl) {
    console.log(nl);
    nl = nextLesson(nl);
}



