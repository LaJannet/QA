let years = prompt("Введіть, будь ласка, скільки вам років");
if (typeof years == "object"){ 
    console.log("Ви натиснули кнопку \"Відміна\".\nОновіть, будь ласка, сторінку");
} else if (isNaN(years) || years < 0 || years > 100){ 
    console.log("Неправильно введені дані.\nВведіть, будь ласка, додатнє число від 0 до 100 включно");
} else {
    if (years == 1 || (years >= 21 && years % 10 == 1)) {
        console.log(years + ' рік');
    } else if (years >= 2 && years <= 4 || (years >= 22 && years % 10 >= 2 && years % 10 <= 4)) {
        console.log(years + ' роки');
    } else {
        console.log(years + ' років');
    }
}