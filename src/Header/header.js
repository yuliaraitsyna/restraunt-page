import iconWorld from './worldwide.png';

const header = document.createElement('div');
header.classList.add('top-header');

const icon = new Image();
icon.src = iconWorld;
icon.classList.add('icon');

const headerText = document.createElement('h2');
headerText.textContent = "MIR 23";
headerText.classList.add('top-header-text');

const button = document.createElement('button');
button.classList.add('cart');
button.innerHTML = "Cart";

header.appendChild(icon);
header.appendChild(headerText);
header.appendChild(button);

export default header;