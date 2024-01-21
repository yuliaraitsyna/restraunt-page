import cart from '../Cart/cart-array'
const counter = document.createElement('span');
counter.classList.add('counter');
counter.innerHTML = cart.length;

export default counter;