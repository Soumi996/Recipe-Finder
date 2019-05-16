import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

class App extends Component {
    render() { 
        return ( 
            <div>
                <SearchRecipes />
                <RecipeList />
            </div>
         );
    }
}
 
export default App;