//Результат: number33
//Виконується лівоасоціативна операція для додавання
//Відбувається конкатенація 'number' з числами 3 та 3 (так як один з доданків рядок, то все приводиться до рядка)
var result1 = 'number' + 3 + 3;
console.log(result1);

//Результат: 3
//null буде перетворено на 0 під час операції додавання
var result2 = null + 3;
console.log(result2);

//Результат: qwerty
//Логічний оператор "І" (AND) повертає останній операнд, якщо обидва істинні; у цьому випадку "qwerty"
var result3 = 5 && "qwerty";
console.log(result3);

//Результат: 42hillel
//Виконується лівоасоціативна операція для додавання
//Унарний плюс приводить строку до числа, тому +'40' та +'2' дають числа 40 та 2 відповідно (які в сумі дають 42),
//а потім відбувається конкатенація (так як один з доданків рядок, то все приводиться до рядка)
var result4 = +'40' + +'2' + "hillel";
console.log(result4);

//Результат: false
//Виконується лівоасоціативна операція, де '10' перетворюється на число 10,
//яке потім віднімається від числа 5 (отримаємо 5) та потім порівнюємо з числом 6
var result5 = '10' - 5 === 6;
console.log(result5);

//Результат: 1
//Js завжди намагається привести типи до числа (true приводиться у вигляді 1, а false - у вигляді 0)
var result6 = true + false;
console.log(result6);

//Результат: NaN
//Неможливо від строки відняти число, це два різних типи
var result7 = '4px' - 3;
console.log(result7);

//Результат: 1
//Js завжди намагається привести типи до числа. Тож строка '4' перетворюється в число 4 та віднімається від числа 3
var result8 = '4' - 3;
console.log(result8);

//Результат: 61
//Виконується правоасоціативна операція для зведення в ступінь ** (3 в степені 0 = 1), а потім відбувається конкатенація
//(так як один з доданків рядок, то все приводиться до рядка)
var result9 = '6' + 3 ** 0;
console.log(result9);

//Результат: 2
//Js завжди намагається привести типи до числа. Тож строка '6' перетворюється в число 6 та відбувається ділення 12 на 6
var result10 = 12 / '6';
console.log(result10);

//Результат: 10false
//Зпочатку виконуємо дію в дужках, де отримуємо false, а потім виконується лівоасоціативна операція, де 
//відбувається конкатенація рядка '10' з false
var result11 = '10' + (5 === 6);
console.log(result11);

//Результат: false
//null та пуста стрічка не рівні між собою
var result12 = null == '';
console.log(result12);

//Результат: 27
//Виконується правоасоціативна операція для зведення в ступінь (Зпочатку 9 ділимо на 3, що дорівнює 3, а потім 3 возводимо в степінь 3)
var result13 = 3 ** (9 / 3);
console.log(result13);

//Результат: true
//Логічне заперечення ! відбувається з права наліво
//Перетворення строки в булеве значення (!!'false' дає нам true і !!'true'дає нам true, так як це рядки)
var result14 = !!'false' == !!'true';
console.log(result14);

//Результат: 1
//Виконується лівоасоціативна операція (зпочатку виконуємо дію з логічним оператор "АБО" (OR), а потім 
//виконуємо дію з логічним оператор "І" (AND))
var result15 = 0 || '0' && 1;
console.log(result15);

//Результат: false
//Порівняння знаком < відбувається з ліва направо; зпочатку розкриваємо дужки;
//Унарний плюс перетворює null в 0; цей 0 порівнюємо з false (отримуємо true), а потім порівнюємо із 1
var result16 = (+null == false) < 1;
console.log(result16);

//Результат: true
//Виконується лівоасоціативна операція (зпочатку виконуємо дію з логічним оператор "І" (AND), а потім
//виконуємо дію з логічним оператор "АБО" (OR))
var result17 = false && true || true;
console.log(result17);

//Результат: false
//Виконується лівоасоціативна операція (зпочатку виконуємо дію в дужках з логічним оператор "АБО" (OR), а потім 
//виконуємо дію з логічним оператор "І" (AND))
var result18 = false && (false || true);
console.log(result18);

//Результат: false
//Порівняння знаком < відбувається з ліва направо; зпочатку розкриваємо дужки; зводимо праву частину в ступінь
//Зведення в ступінь відбувається з права наліво
//Унарний плюс перетворює null в 0; цей 0 порівнюємо з false (отримуємо true), а потім порівнюємо із 1
var result19 = (+null == false) < 1 ** 5;
console.log(result19);
