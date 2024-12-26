const carForm = document.getElementById('carForm');
const carList = document.getElementById('carList');
const cars = [];

carForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const position = parseInt(document.getElementById('position').value);

    const car = { name, model, year, price };

    if (position > 0 && position <= cars.length + 1) {
        cars.splice(position - 1, 0, car);
    } else {
        cars.push(car);
    }

    updateCarList();

    carForm.reset();
});

function updateCarList() {
    carList.innerHTML = '';

    cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.textContent = `№${index + 1}: ${car.name} (${car.model}, ${car.year}) - $${car.price}`;
        carList.appendChild(li);
    });
}


