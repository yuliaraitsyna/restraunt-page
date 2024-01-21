import './style.css';
import header from './Header/header';
import feed from './Content/main';

const main = document.getElementById('content');
main.appendChild(header);
main.appendChild(feed);
