import vetements from './vetements.js';
import {getCategories} from './module/categories.js'
import {displayVetements} from './module/vet.js'


initialisation();

function initialisation(){
    getCategories(vetements);
    displayVetements(vetements);
}

