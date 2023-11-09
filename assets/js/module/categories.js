export function getCategories(vetements){
    let categories =[]; 
    vetements.forEach(vetement => {
        if(!categories.includes(vetement.category)){
            categories.push(vetement.category);
        }
      })
      console.log(categories)
      categories.sort().map((cate) => displayCategorie(cate));
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
    let categoryClicked = event.target.dataset.categorie;
    [...document.querySelectorAll('#categories button')].map((cate)=> {
        cate.classList.remove('btn-primary')
        cate.classList.add('btn-outline-primary')
        return
    })
    e.target.classList.add('btn-primary');
    e.target.classList.remove('btn-outline-primary');
    document.querySelectorAll('#cars .card').forEach(car => {
        if(car.dataset.categorie === categoryClicked){
        car.classList.add('d-flex');
        car.classList.remove('d-none');
        }else if(categoryClicked == ''){
        car.classList.add('d-flex');
        car.classList.remove('d-none');
        }else{
        car.classList.add('d-none');
        car.classList.remove('d-flex');
        }
    })
}