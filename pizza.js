
let pizzaSizes =
    [
        { size: 'small', price: 10 },
        { size: 'medium', price: 13 },
        { size: 'large', price: 20 }
    ]

let pizzaBase = ['Tomato', 'Pesto', 'Alfredo']

class PizzaTopping {
    constructor(included, price, options) {
        this.included = included;
        this.price = price;
        this.options = options;
    }
    getTotal(selected) {
        let numForTotal = (selected - this.included);
        if (numForTotal < 0) {
            return 0;
        }
        return numForTotal * this.price;
    }
}

let pizzaCheese = new PizzaTopping(1, 2, ['Mozzarella', 'Parmesan', 'Fontina'])

let pizzaVegetable = new PizzaTopping(2, 1, [
    'Bell Peppers',
    'Garlic',
    'Jalepeno',
    'Mushrooms',
    'Onions',
    'Olives',
    'Tomato',
    'Sundried Tomato'
])

let pizzaMeat = new PizzaTopping(1, 3, ['Chicken', 'Pepperoni', 'Sausage'])

function countBox(checkboxes){
    let count = 0
    for (let checkbox of checkboxes){
        if (checkbox.checked === true) {
            count = count + 1
        }
    }
    return count 
}

function subtotal (){
    let total = parseInt(document.querySelector('input[name=size]:checked').value);
    
    let cheese = document.querySelectorAll('input[name=cheese]');
    let vegetables = document.querySelectorAll('input[name=vegetables]');
    let meat = document.querySelectorAll('input[name=meat]');

    total = pizzaCheese.getTotal(countBox(cheese)) + total;
    total = pizzaVegetable.getTotal(countBox(vegetables)) + total;
    total = pizzaMeat.getTotal(countBox(meat)) + total;
    
    let totalDiv = document.querySelector('#total');
    totalDiv.innerHTML = total

    return total
}

document.querySelector('#pizza-toppings').addEventListener('change', subtotal);