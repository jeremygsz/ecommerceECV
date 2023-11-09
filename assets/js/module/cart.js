import vetements from "./../vetements.js";

export function addToCart(){
    document.querySelector('#product button')?.addEventListener('click', (e)=>{
        let productToAdd = {
            'id':e.target.closest('section').dataset.productId,
            'size':e.target.dataset.size,
            'qty':1,
        }

        let cart = [];
        let panierLocale = localStorage.cart // localStorage.getItem('cart')
        let isModified = false;
        if(panierLocale){
            cart = JSON.parse(localStorage.cart);
            cart.map((element)=>{
                if(element.id === productToAdd.id && element.size === productToAdd.size){
                    element.qty += productToAdd.qty;
                    isModified = true;
                }
            })
            if(!isModified){
                cart.push(productToAdd)
            }
        }else{
            cart.push(productToAdd)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    })
}

export function displayCart(vetements){
   if(document.getElementById('cart-page')){
    
        let productsCart = [];
        let cart = localStorage.cart;
        if(!cart){
            document.querySelector('#cart-page').innerHTML = '<h1>Votre panier est vide</h1>';
        }else{
         
        }
    // si cart est rempli on continue sinon message panier vide
    // iteration sur vetements 
    // affichage des éléments du apnier en recupérant les info du vetement
    //ajout d'un input pour modficier la quantité


   } 
}