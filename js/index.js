// let str = 'lorem ispum dolor site amet';

// function capitalize(arg) {
//     let res = arg.split(" ");
//     for (let i = 0; i < res.length; i++) {
//         res[i] = res[i][0].toUpperCase() + res[i].slice(1);
//     }
//     return res.join(' ');
// }

// console.log(capitalize(str));


// let arr = ["olma", "banan", "gilos", "behi"];
// function sortArrayString(arg) {
//     arg.sort(function (a, b) {
//         return b.length - a.length;
//     })
//     return arg[0];
// }
// console.log(sortArrayString(arr));




// let arr = ['olma', 'banan', 'gilos']
// let n = 3;

// function push(arg) {
//     let res = [];

//     for(let i = arg.length-n; i>arg.length;i++){
//         res.push(arg[i])
//     }
//     return res;
// }

// console.log(push(arr));

let arr = [2, 5, 1, 6, 7]
let sum = 0;
arr.forEach(function (value, index, a) {
    console.log(value, index);

})
