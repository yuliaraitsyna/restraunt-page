import cart from '../Cart/cart-array';
import counter from '../Header/counter';
import omlet from '../img/omelette.png';
import friedEgg from '../img/fried-egg.png';
import orangeJuice from '../img/orange-juice.png';
import coffee from '../img/coffee-cup.png';

class Position{
    #title;
    #price;
    #image;
    constructor(title, price, image){
        this.#title = title;
        this.#price = price;
        this.#image = image;
    }
    get Title(){
        return this.#title;
    }
    get Price(){
        return this.#price;
    }
    get Image(){
        return this.#image;
    }
}
const positions = [
    new Position("Omlet", 13, `url(${omlet})`),
    new Position("Benedict", 15, `url(${friedEgg})`),
    new Position("Orange Juice", 5, `url(${orangeJuice})`),
    new Position("Coffee", 4, `url(${coffee})`),
];
const feed = document.createElement('div');
feed.classList.add('grid');

positions.forEach(position => {
    const positionElement = document.createElement('div');
    positionElement.classList.add('position');

    const positionTitle = document.createElement('p');
    positionTitle.innerHTML = position.Title;
    positionTitle.classList.add('position-title');

    const positionPrice = document.createElement('div');
    positionPrice.innerHTML = position.Price;
    positionPrice.classList.add('price');

    const photo = document.createElement('div');
    photo.style.backgroundImage = position.Image;
    photo.classList.add('photo');

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('add-btn-container');

    const counterDisplay = document.createElement('div');
    counterDisplay.classList.add('counter-display');

    const minusButton = document.createElement('button');
    minusButton.classList.add('minus-btn');
    minusButton.innerHTML = '-';

    const plusButton = document.createElement('button');
    plusButton.classList.add('plus-btn');
    plusButton.innerHTML = '+';

    buttonsContainer.appendChild(minusButton);
    buttonsContainer.appendChild(counterDisplay);
    buttonsContainer.appendChild(plusButton);
    positionElement.appendChild(photo);
    positionElement.appendChild(positionTitle);
    positionElement.appendChild(positionPrice);
    positionElement.appendChild(buttonsContainer);

    const addButton = document.createElement('button');
    addButton.innerHTML = "Add";
    addButton.classList.add('add-btn');
    addButton.classList.add('active');
    addButton.onclick = () =>{
        cart.push(position);
        counter.innerHTML = cart.length;
        addButton.classList.remove('active');
        buttonsContainer.classList.add('active');
        console.log("New item added to cart: " + position.Title);
        console.log("Cart contents:", cart);
    };


    positionElement.appendChild(addButton);

    feed.appendChild(positionElement);
})

export default feed;