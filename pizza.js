
let pizzaSizes = {
    'Small': 10,
    'Medium': 13,
    'Large': 20
}

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

function getSelectedBoxes(checkboxes) {
    let checkedToppings = []
    for (let checkbox of checkboxes) {
        if (checkbox.checked === true) {
            checkedToppings.push(checkbox.value)
        }
    }
    return checkedToppings
}

function subtotal() {
    let total = 0;
    let selectedSize = document.querySelector('input[name=size]:checked').value;
    total = total + pizzaSizes[selectedSize];

   
    let base = document.querySelectorAll('input[name=base]');
    let cheese = document.querySelectorAll('input[name=cheese]');
    let vegetables = document.querySelectorAll('input[name=vegetables]');
    let meat = document.querySelectorAll('input[name=meat]');

   
    let selectedBase = getSelectedBoxes(base);
    let selectedCheese = getSelectedBoxes(cheese);
    let selectedVegetables = getSelectedBoxes(vegetables);
    let selectedMeat = getSelectedBoxes(meat);

    total = pizzaCheese.getTotal(selectedCheese.length) + total;
    total = pizzaVegetable.getTotal(selectedVegetables.length) + total;
    total = pizzaMeat.getTotal(selectedMeat.length) + total;

    let totalDiv = document.querySelector('#total');
    totalDiv.innerHTML = `$${total}`;

    let sizeDiv = document.querySelector('#selected-size');
    sizeDiv.innerHTML = selectedSize;

    let baseDiv = document.querySelector('#selected-base');
    baseDiv.innerHTML = selectedBase.join(', ');

    let cheeseDiv = document.querySelector('#selected-cheese');
    cheeseDiv.innerHTML = selectedCheese.join(', ');

    let vegetableDiv = document.querySelector('#selected-vegetable');
    vegetableDiv.innerHTML = selectedVegetables.join(', ');

    let meatDiv = document.querySelector('#selected-meat');
    meatDiv.innerHTML = selectedMeat.join(', ');

    return total
}

document.querySelector('#pizza-toppings').addEventListener('change', subtotal);

subtotal()