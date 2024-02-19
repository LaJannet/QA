var obj = {
    name: 'Fluffy',
    species: 'Giraffe',
    legs: 4,
    getInfo: function () {
        for (let key in this){
            if (typeof this[key] !== 'function') {
            console.log(key + ': ' + this[key]);
            }
        }
    }
}

obj.getInfo(); // Правильна інформація про об'єкт
obj.color = 'Жовтий'; // Додали властивість до об'єкта
console.log('\n');
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.