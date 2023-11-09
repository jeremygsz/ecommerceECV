import vetements from './vetements.js';
import {getCategories} from './module/categories.js'
import {displayVetements, getProduct} from './module/vet.js'
import {addToCart,displayCart} from './module/cart.js';

initialisation();

function initialisation(){
    getCategories(vetements);
    displayVetements(vetements);
    getProduct(vetements);
    addToCart();
    displayCart(vetements);
}
