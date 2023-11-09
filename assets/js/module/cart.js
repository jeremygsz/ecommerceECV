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
            document.querySelector('#cart-page').innerHTML = '<h1 class="text-center my-5">Votre panier est vide</h1>';
        }else{
            cart = JSON.parse(localStorage.cart);
            let productToDisplay = [];
            cart.forEach(element => {
                vetements.filter((el)=>{ 
                    if(element.id == el.id){
                        el.qty = element.qty;
                        el.size = element.size;
                        productToDisplay.push(el)
                    }
                    
                })
            });
            productToDisplay.forEach( (product)=>{
                console.log(product)
                createProductCart(product);
            });
        }
    // si cart est rempli on continue sinon message panier vide
    // iteration sur vetements 
    // affichage des éléments du apnier en recupérant les info du vetement
    //ajout d'un input pour modficier la quantité


   } 
}
function createProductCart(product){
    let article = document.createElement('article');
    article.classList.add('d-flex', 'flex-wrap', 'col-12', 'border','border-1','my-3')

    let figure =  document.createElement('figure','col-6');
    article.classList.add('d-flex','col-6')
    let img =  document.createElement('img');
    img.setAttribute('src','./../assets/img/'+ product.img )
    img.setAttribute('alt', 'Photo du produit ' + product.title );
    img.classList.add('img-fluid');
    figure.append(img)

    let productInfo = document.createElement('div')
    productInfo.classList.add('d-flex','col-6','flex-wrap')

    let productTitle = document.createElement('h2');
    productTitle.classList.add('col-12');
    productTitle.innerText = product.title;
    
    let productSubTitle = document.createElement('h3');
    productSubTitle.classList.add('col-12');
    productSubTitle.innerText = product.subtitle;

    let productQty = document.createElement('input');
    productQty.classList.add('form-control');
    productQty.setAttribute('type', 'number');
    productQty.setAttribute('value', product.qty);
    productQty.setAttribute('min', '1');
    productQty.setAttribute('max', '100');
    productQty.setAttribute('data-product-id',product.id )
    productQty.setAttribute('data-product-size',product.size )

    productInfo.append(productTitle)
    productInfo.append(productSubTitle)
    productInfo.append(productQty)
    article.append(figure)
    article.append(productInfo)

    document.querySelector('#cart-page').append(article)

}
