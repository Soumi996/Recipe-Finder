import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems'; 
import { Link } from 'react-router-dom';
import '../styles/index.css'

class FavoriteRecipes extends Component {
    render() { 
        const { FavoriteRecipes } = this.props
        return ( 
            <React.Fragment>
                <h4><Link to='/' className="link">HOME</Link></h4>
                <div className="recipe-item">
                    {FavoriteRecipes.map((data, index) => {
                        return (
                            <RecipeItems
                                key={index}
                                items={data}
                                favoriteButton={false}
                            />
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        FavoriteRecipes: state.SetOurFavoriteRecipe
    }
}
 
export default connect(mapStateToProps, null)(FavoriteRecipes);