import Search from './models/Search';
import List from './models/list';
import Likes from './models/Like';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likeView';
import {elements,renderLoader, clearLoader} from './views/base';
import Recipe from './models/recipe';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * -Shopping list object
 * - Liked recipes
 */
/**
 * Search Controller
 */
 const state={};
 
const controlSearch = async ()=>{
      //1) Get query from Views
      const query =searchView.getInput();
  
      if(query){
        state.search =new Search(query);
      //3) Prepare UI for results
           searchView.clearInput();
           searchView.clearResult();
           renderLoader(elements.searchRes);
      //4) Search for recipes
      try{
          await state.search.getResult(); 
          //5) Render results on UI
                clearLoader();
             searchView.RenderResult( state.search.result);
      }catch(err){
           alert('Something went wrong with Search...');
               clearLoader();
      }
           
      }
      
     };
 elements.searchform.addEventListener('submit', e => {
     e.preventDefault();
     controlSearch();
     }
          );
 
 elements.searchResPages.addEventListener('click',e=>{
     const btn = e.target.closest('.btn-inline ');//lay element can chon
      if(btn){
           const gotoPage =parseInt(btn.dataset.goto,10); // lay du lieu tu js cua elements duoc chon
           searchView.clearResult();
           searchView.RenderResult( state.search.result,gotoPage);
          
          }
    
     });


/**
 * Recipe Controller
 */
const controlRecipe =async()=>{
     const id = window.location.hash.replace('#','');
   
     if(id){
          //Prepare UI for changes
          recipeView.clearRecipe();
          renderLoader(elements.recipe);
          // Hightlight selected search item
        if(state.search){
             searchView.hightlightSelected(id)
          };
               
          
          // Create new recipe object
          state.recipe =new Recipe(id);

try{

// Get recipe data
await state.recipe.getRecipe();
 
state.recipe.parseIngredients();
// Calulate servings and time
state.recipe.calcTime();
state.recipe. calcServings();
// Render
clearLoader();
recipeView.renderRecipe(
     state.recipe,
     state.likes.isLiked(id)
     );

}catch(err){
   alert('err processing recipe!');
}

}
};
 ['hashchange','load'].forEach(event =>window.addEventListener(event,controlRecipe));

/**
 * LIST CONTROLLER
 * 
 * 
 */
const controlList =()=>{

     // create a nwe list IF there in none yet
     if(!state.list) state.list =new List();

     // Add each ingredient to the list and UI
     state.recipe.ingredients.forEach(el=>{
           const item =state.list.addItem(el.count,el.unit,el.ingredient);
               listView.renderItem(item);
})
};

// Handle delete and update list item events
elements.shopping.addEventListener('click',e=>{
     const id =e.target.closest('.shopping__item').dataset.itemid;

     if(e.target.matches('.shopping__delete , .shopping__delete *')){
               //delete from state
          state.list.deleteItem(id);

               // Delete from UI
          listView.deleteItem(id);
     }
               // Handle the count update
        else if(e.target.matches('.shopping__count-value')){
             const val =parseFloat(e.target.value,10);
             state.list.updataCount(id,val);
        }
})
  /** Like Controller */

   const  controlLike=()=>{
        if(!state.likes) state.likes =new Likes();
        const currentID = state.recipe.id;

        // User has NOT yet liked current recipe

        if(!state.likes.islike(currentID)){
             //Add like to the state
             const newLike =state.likes.addLike(
                  currentID,
                  state.recipe.title,
                  state.recipe.author,
                  state.recipe.img
             );
             //Toggle the like button
                 likeView.toggleLikeBtn(true);
             //Add like to UI list
             likeView.recipeView(newLike);
            
             // User Has liked current recipe
        }else{
             // Remove like from the state
             state.likes.deleteLike(currentID);
               //Toggle the like button
               likeView.toggleLikeBtn(false);
             //Remove like to UI list
              likeView.deleteLike(currentID);

        }
        likeView.toggleLikeMenu(state.likes.getNumber());
   };
   window.addEventListener('load',()=>{
     state.likes =new Likes();
     
     //Restore likes
     state.likes.readStorage();
      //Toggle like menu button
     likeView.toggleLikeMenu(state.likes.getNumber());
     
     // Render the existing likes

     state.likes.likes.forEach(like=>likeView.renderLike(like));

   })
 //Handling recipe button clicks

 elements.recipe.addEventListener('click',e=>{
      if(e.target.matches('.btn-decrease,.btn-decrease*'))
      {
           if(state.recipe.servings >1){
                //descrease button is clicked
                state.recipe.updataServings('dec');
                recipeView.updateServingIngredient(state.recipe);
               
           }
      }else if(e.target.matches('.btn-increase,.btn-increase*')){
               //inscrease button is clicked
               state.recipe.updataServings('inc');
               recipeView.updateServingIngredient(state.recipe);
      }else if(e.target.matches('.recipe__btn--add','.recipe__btn--add *')){
              // Add ingredients to shopping list
                controlList();
      }else if(e.target.matches('.recipe__love , recipe__love*')){
              // like controller
              controlLike();
      }
 })

