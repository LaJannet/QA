let measuring_unit = 'км';
let amount = 10;

switch (measuring_unit) {
    case "км":
        console.log(amount + " км це " + amount * 1000 + " м");
        break;
    case "год":
        console.log(amount + " год це " + amount * 60 + " хв");
        break;
    case "кг":
        console.log(amount + " кг це " + amount * 1000 + " г");
        break;
    default:
        console.log("Невідома одиниця виміру");
}
