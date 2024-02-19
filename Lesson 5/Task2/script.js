var services = {

    "стрижка": "60 грн",
    
    "гоління": "80 грн",
    
    "Миття голови": "100 грн",

    price: function (){
        let total = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                total += Number.parseInt(this[key]);
            }
        }
    return total;
    },

    minPrice: function (){
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                min = Math.min(min, Number.parseInt(this[key]));
            }
        }
    return min;
    },

    maxPrice: function (){
        let max = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                max = Math.max(max, Number.parseInt(this[key]));
            }
        }
    return max;
    }    

};

    console.log("Обчислює та повертає загальну вартість \"наданих послуг\": " + services.price() + " грн");
    console.log("Повертає мінімальний price: " + services.minPrice() + " грн");
    console.log("Повертає максимальний price: " + services.maxPrice() + " грн");
    console.log('\n');

    services['Розбити скло'] = "200 грн";

    console.log("Обчислює та повертає загальну вартість \"наданих послуг\": " + services.price() + " грн");
    console.log("Повертає мінімальний price: " + services.minPrice() + " грн");
    console.log("Повертає максимальний price: " + services.maxPrice() + " грн");


