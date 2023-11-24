let a = +prompt("Mời bạn nhập số a: ");
let b = +prompt("Mời bạn nhập số b: ");
let c = +prompt("Mời bạn nhập số c: ");

// a>b, a>c b>c a max, c min
// a>b, a>c b<c a max, b min
//a>b,a<c    c max, b min
//a <b b<c  c max a min
//a<b,b>c, a>c  b max c min
//a<b,b>c, a<c  b max a min

if(a>b && b>c){
    console.log("Max là a","min là c");
}

if(a>c && b<c){
    console.log("Max là a","min là b");
}

if(a>b && a<c){
    console.log("Max là c","min là b");
}

if(a<b && b<c){
    console.log("Max là c","min là a");
}

if(a<b && a>c){
    console.log("Max là b","min là c");
}

if(a<b && a<c){
    console.log("Max là b","min là a");
}
