import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/index.css';
import { FavoriteRecipe } from '../action/';


class RecipeItems extends Component {
    state = {
        favorited: false
    }

    favorite = (recipe) => {
        const { FavoriteRecipe } = this.props;
        FavoriteRecipe(recipe);
        this.setState({
            favorited: true
        });

    }

    render() { 
        const { items } = this.props;
        return ( 
            <div className="recipe-item">
                {
                    this.props.favoriteButton === true ?
                        this.state.favorited ?
                            <div className="star">&#9733;</div>
                            :
                            <div className="star" onClick={() => this.favorite(items)}>
                                &#9734;
                        </div>
                    :

                    <div></div>
                }
                <div className="recipe-text">
                    <a href={items.href}>
                        <h4>{items.title}</h4>
                    </a>
                    <p>{items.ingredients}</p>
                </div>
                <img
                    src={items.thumbnail}
                    alt={items.title}
                    className="recipe-img"
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({FavoriteRecipe}, dispatch);
}
 
export default connect(null, mapDispatchToProps)(RecipeItems);
