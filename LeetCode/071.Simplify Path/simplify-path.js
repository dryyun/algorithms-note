/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let s = [];
    let arr = path.split('/');
    for (let i = 0, len = arr.length; i < len; i++) {
        let p = arr[i].trim();
        if ('' === p) {
            continue;
        }
        if ('.' === p) {
        } else if ('..' === p) {
            s.pop();
            s.pop();
        } else {
            s.push('/', p);
        }
    }
    return s.length ? s.join('') : '/';
};

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/home/b/c/d/'));
console.log(simplifyPath('/a//./b/../../c/')); // /a/b/../ => /a/b
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home///foo/'));
