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
       alert('Ajouté au panier')
    })
}

export function displayCart(vetements){
   if(document.getElementById('cart-page')){
    
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
                createProductCart(product);
            });
            total();
        }
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
 
    let productSize = document.createElement('h4');
    productSize.classList.add('col-12');
    productSize.innerText = 'Taile: '+product.size;

    let productPrice = document.createElement('h4');
    productPrice.classList.add('col-12');
    productPrice.innerText = 'Prix :'+ (product.price-product.discount);

    let productQty = document.createElement('input');
    productQty.classList.add('form-control');
    productQty.setAttribute('type', 'number');
    productQty.setAttribute('value', product.qty);
    productQty.setAttribute('min', '1');
    productQty.setAttribute('max', '100');
    productQty.setAttribute('data-product-id',product.id )
    productQty.setAttribute('data-product-price',(product.price-product.discount) )
    productQty.setAttribute('data-product-size',product.size )
    
    productInfo.append(productTitle)
    productInfo.append(productSubTitle)
    productInfo.append(productSize)
    productInfo.append(productPrice)
    productInfo.append(productQty)
    article.append(figure)
    article.append(productInfo)

    document.querySelector('#cart-page').append(article)

}

function total(){
    let total = 0;
    let qty = 0;
    document.querySelectorAll('article input').forEach(element=>{
        total += parseFloat(element.dataset.productPrice * element.value);
        qty += parseInt(element.value);
    })
    document.querySelector('#total').innerHTML = total + '€';
    document.querySelector('#qtyTotal').innerHTML = qty;
}
export function changeCart(){
    document.querySelectorAll('article input').forEach(input=>{
        input.addEventListener('change', (event) =>{
            total();
            changeCartValue(event);
        })
    })
   
}


function changeCartValue(event){
        let productToAdd = {
            'id':event.target.dataset.productId,
            'size':event.target.dataset.productSize,
            'qty':event.target.value,
        }
        console.log(productToAdd)

        let cart = [];
        cart = JSON.parse(localStorage.cart);
        cart.map((element)=>{
            if(element.id === productToAdd.id && element.size === productToAdd.size){
                element.qty = parseInt(productToAdd.qty);
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart));
}