import "./main.scss";
import {Buttons} from './components/button/button';

const add123 = (a, b) => a + b;
const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Buttons());

const res = add123(222, 3);
console.log("Helloasda");