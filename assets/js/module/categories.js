export function getCategories(vetements){
    if(document.getElementById('home-page')){
        let categories =[]; 
        vetements.forEach(vetement => {
            if(!categories.includes(vetement.category)){
                categories.push(vetement.category);
            }
        })
      console.log(categories)
      categories.sort().map((cate) => displayCategorie(cate));
    }
}

function displayCategorie(categorie){
    let categoryButton = document.createElement('button');
    categoryButton.innerText = categorie;
    categoryButton.setAttribute('data-categorie', categorie)
    categoryButton.classList.add('btn','btn-outline-primary', 'm-1');
    categoryButton.onclick = categorieEvent;
    document.querySelector('#categories > div')?.append(categoryButton);
}

function categorieEvent(e){
    let categoryClicked = e.target.dataset.categorie;
    [...document.querySelectorAll('#categories button')].map((cate)=> {
        cate.classList.remove('btn-primary');
        cate.classList.add('btn-outline-primary');
        return;
    })
    e.target.classList.add('btn-primary');
    e.target.classList.remove('btn-outline-primary');
    filterProduct(categoryClicked);
}

function filterProduct(categoryClicked){
    document.querySelectorAll('#products .card').forEach(product => {
        if(product.dataset.categorie === categoryClicked){
            product.classList.add('d-flex');
            product.classList.remove('d-none');
        }else if(categoryClicked == ''){
            product.classList.add('d-flex');
            product.classList.remove('d-none');
        }else{
            product.classList.add('d-none');
            product.classList.remove('d-flex');
        }
    })

}