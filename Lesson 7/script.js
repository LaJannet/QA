var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var re = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?(@gmail|@yahoo)\.com$/;
var res = arr.filter(item => re.test(item.email)).map(item => item.email);

console.log("The main array =");
console.log(arr);
console.log("\nConverted array =");
console.log(res);
