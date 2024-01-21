import iconImg from '../img/coffee-beans.png';
import counter from '../Header/counter'
const header = document.createElement('div');
header.classList.add('top-header');

const icon = document.createElement('div');
icon.classList.add('icon');
icon.style.backgroundImage = `url(${iconImg})`; 

const headerText = document.createElement('h2');
headerText.textContent = "MIR 23";
headerText.classList.add('top-header-text');

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('btn-container');
const button = document.createElement('button');
button.classList.add('cart');
button.innerHTML = "Cart";
button.addEventListener('click', () =>{
    window.location.href = 'cart.html';
})
buttonContainer.appendChild(button);

buttonContainer.appendChild(counter);

header.appendChild(icon);
header.appendChild(headerText);
header.appendChild(buttonContainer);

export default header;