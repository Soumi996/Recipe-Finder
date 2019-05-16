import { combineReducers } from 'redux';
import { ADD_ITEMS } from '../action';
import { FAVORITE_RECIPE } from '../action';

const SetOurRecipe = (state = [], action) => {
    switch(action.type){
        case ADD_ITEMS:
            let data = action.items
            return data;
        default:
            return state;
    }
}

const SetOurFavoriteRecipe = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_RECIPE:
            let data = [...state, action.Recipe]
            return data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ SetOurRecipe, SetOurFavoriteRecipe });

export default rootReducer;

