import {elements} from './base';
export const clearInput =()=>{
    elements.searchInput.value='';
} ;
export const clearResult =()=>{
    elements.searchResList.innerHTML='';
    elements.searchResPages.innerHTML='';
};
export const getInput =()=>elements.searchInput.value;
export const hightlightSelected =id=>{
    const resultsArr =Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el=>{el.classList.remove('results__link--active')});

      document.querySelector(`results__link[href*="#${id}"]`).classList.add('results__link--active');
};
/*
// Expamle 'Pasta with tomato and spinach'
acc:0/ acc + cur,length=5 /newTittle =['Pasta']  
acc:5/ acc + cur,length=9 /newTittle =['Pasta','with']  
acc:9/ acc + cur,length=15 /newTittle =['Pasta,'with','tomato]  
acc:15/ acc + cur,length=18 /newTittle =['Pasta,'with','tomato]
acc:18/ acc + cur,length=24 /newTittle =['Pasta,'with','tomato]

*/
export const limitRecipeTitle =(title,limit =17)=>{
    const newTitle=[];
     if(title.length > limit)
     {
         title.split(' ').reduce((acc,cur)=>{
            if(acc+cur.length <= limit){
               newTitle.push(cur);
            }
            return acc+cur.length;
         },0);

         return `${newTitle.join(' ')}...`;
     }   
     return title;
    
};
const renderRecipe = recipe =>{
      const markup =`
      <li>
      <a class="results__link " href="#${recipe.recipe_id}">
          <figure class="results__fig">
              <img src="${recipe.image_url}" alt="${recipe.title}">
          </figure>
          <div class="results__data">
              <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
              <p class="results__author">${recipe.publisher}</p>
          </div>
      </a>
  </li>
      `;
      elements.searchResList.insertAdjacentHTML("beforeend",markup);
} ;
// type 'prev' or 'next'}
const creatButton =(page,type)=>`
 <button class="btn-inline results__btn--${type}" data-goto= ${ type ==='prev' ? page-1 : page +1} >
        <span>Page ${ type ==='prev' ? page-1 : page +1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
      
</button>
`;
    const renderButtons =(page,numresults,resperPage)=>{
        const pages= Math.ceil(numresults/resperPage);
            let button;
        if(page ===1 && pages >1 ){
            //only button to go to next page
            button = creatButton(page,'next');
        }else if(page<pages){
           //  both buttons
           button = `${creatButton(page,'prev')}
                     ${creatButton(page,'next')}`;
        }else if(page ===pages && pages  >1){
           //Only button to go to prev page
           button = creatButton(page,'prev');
        }
        elements.searchResPages.insertAdjacentHTML('afterbegin',button);
    };
export const RenderResult = (recipes,page =1,resperPage=10) =>{
     //render results of currente page
    const start = (page-1)*resperPage;
    const end =page*resperPage;
      
    recipes.slice(start,end).forEach(renderRecipe); 
    // render pagination buttons        
        renderButtons(page,recipes.length,resperPage);
}

