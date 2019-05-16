import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/app';
import FavouriteRecipe from './components/favoriteRecipe';
import 'bootstrap/dist/css/bootstrap.css' 


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
                <Route exact path='/' component={App} />
                <Route path='/favourites' component={FavouriteRecipe}/>
        </Switch>
    </BrowserRouter>
</Provider>,document.getElementById('root')
)