function pow(x,y){
    let output = 1;
    for (let i = 0; i < y; i++) {
        output *= x;
    }
    return output;
}

// Виклик функції
let result = pow(2,3);
console.log(result);