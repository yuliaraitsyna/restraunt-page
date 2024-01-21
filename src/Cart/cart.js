import '../style.css';
import cart from './cart-array';

document.addEventListener('DOMContentLoaded', () => {
    const cartMain = document.getElementById('cart-content');

    const cartHeader = document.createElement('div');
    cartHeader.classList.add('top-header');

    const icon = document.createElement('div');
    icon.classList.add('icon');

    const headerText = document.createElement('h2');
    headerText.textContent = "MIR 23";
    headerText.classList.add('top-header-text');

    cartHeader.appendChild(icon);
    cartHeader.appendChild(headerText);

    cartMain.appendChild(cartHeader);

    const cartFeed = document.createElement('div');
    cartFeed.classList.add('feed');

    cart.forEach(element => {
        const cartElement = document.createElement('div');
        cartElement.classList.add('position');  // Corrected class name

        const cartTitle = document.createElement('p');
        cartTitle.innerHTML = element.Title;  // Corrected variable name
        cartTitle.classList.add('position-title');

        const cartPrice = document.createElement('div');
        cartPrice.innerHTML = element.Price;  // Corrected variable name
        cartPrice.classList.add('price');

        const photo = document.createElement('div');
        photo.style.backgroundImage = element.Image;  // Corrected variable name
        photo.classList.add('photo');

        const removeButton = document.createElement('button');
        removeButton.innerHTML = "Remove";
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => {
            const index = cart.indexOf(element);
            if (index !== -1) {
                cart.splice(index, 1);
                console.log("Removed from cart: " + element.Title);
                console.log("Cart contents:", cart);
            }
        };

        cartElement.appendChild(photo);
        cartElement.appendChild(cartTitle);
        cartElement.appendChild(cartPrice);
        cartElement.appendChild(removeButton);

        cartFeed.appendChild(cartElement);
    });

    // Append the cartFeed to the cartMain
    cartMain.appendChild(cartFeed);
});
