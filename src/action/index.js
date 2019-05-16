export const ADD_ITEMS = 'ADD_ITEMS';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export const SetRecipes = (itemsdata) => {
    const action = {
        type: ADD_ITEMS,
        items: itemsdata
    }
    return action;
}

export const FavoriteRecipe = (RecipeData) => {
    const action = {
        type: FAVORITE_RECIPE,
        Recipe: RecipeData
    }
    return action;
}