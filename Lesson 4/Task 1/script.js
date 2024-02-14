//while
function drawTriangle(height, symbol) {
    let output = "";
    let i = 1
    while(i <= height) {
        let j = 1;
        while(j <= i){
        output += symbol;
        j++
        }
        output += '\n';
        i++
    }
    return output;
}

// Виклик функції
let result2 = drawTriangle(5, '*');
console.log(result2);

//for
function drawTriangle(height, symbol) {
    let output = "";
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
        output += symbol;
        }
        output += '\n';
    }
    return output;
}

// Виклик функції
let result = drawTriangle(5, '*');
console.log(result);