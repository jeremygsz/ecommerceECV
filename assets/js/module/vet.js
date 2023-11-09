export function displayVetements(vetements){
    vetements.forEach(element => {
        let blocVetement = document.createElement('a');
        blocVetement.classList.add('card');
        blocVetement.setAttribute('data-categorie', element.category)
        blocVetement.setAttribute('href', 'pages/product.html?productId='+element.id)
    
        let imgVetement = document.createElement('img');
        imgVetement.setAttribute('src','./assets/img/'+ element.img )
        imgVetement.setAttribute('alt', 'Photo du produit ' + element.title )
    
        let vetementInfo = document.createElement('div');
        vetementInfo.classList.add('card-body');
    
        let titleVetement = document.createElement('p');
        titleVetement.classList.add('card-title');
        titleVetement.innerText = element.title;
        
        let subtitleVetement = document.createElement('p');
        subtitleVetement.classList.add('card-subtitle');
        subtitleVetement.innerText = element.subtitle;
        
        let categoryVetement = document.createElement('p');
        categoryVetement.classList.add('card-text');
        categoryVetement.innerText = element.category;
    
        let priceBlocVet = document.createElement('div');
        let finalPrice = document.createElement('span');
        finalPrice.classList.add('text-success');
        finalPrice.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(element.price-element.discount);
        priceBlocVet.append(finalPrice);
        if(element.discount>0){
            let firstPrice = document.createElement('span');
            firstPrice.classList.add('barre');
            firstPrice.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(element.price);
            let discount = document.createElement('span')
            discount.classList.add('text-danger');
            discount.innerText = '-' + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(element.discount);

            priceBlocVet.append(discount)
            priceBlocVet.append(firstPrice)
        }
       
    
        let sizesBlocVet = document.createElement('div');
        element.size.forEach(s=>{
            sizesBlocVet.append(createSizeSpan(s))
        }) 


        vetementInfo.append(titleVetement)
        vetementInfo.append(subtitleVetement)
        vetementInfo.append(categoryVetement)
        vetementInfo.append(priceBlocVet)
        vetementInfo.append(sizesBlocVet)
    
        blocVetement.append(imgVetement)
        blocVetement.append(vetementInfo)
    
        document.getElementById('products')?.append(blocVetement);
    });
    
}
function createSizeSpan(size){
    let span = document.createElement('span')
    span.innerText = size;
    span.classList.add('btn', 'btn-dark', 'm-1');
    span.dataset.size = size
    return span;
}

export function getProduct(vetements){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let product = {};
    vetements.filter((element)=>{
        if(element.id == urlParams.get('productId')){
            displayVetement(element);
            return;
        }
    })

}

export function displayVetement(vetement){
    
}
