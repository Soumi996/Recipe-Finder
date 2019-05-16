import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';
import { Link } from 'react-router-dom';
import '../styles/index.css'
class RecipeList extends Component {
    render() { 
        const { items } = this.props;
        let data = items.SetOurRecipe;
        let data_2 = items.SetOurFavoriteRecipe;
        console.log(data); 
        return ( 
            <React.Fragment>
                {data_2.length > 0 ? 
                    <h4><Link to='/favourites' className="link">FAVOURITES</Link></h4>
                    :
                    <div></div>  
                }
                <div>
                    {data.map((data, index) => {
                        return (
                            <RecipeItems
                                key={index}
                                items={data}
                                favoriteButton={true}
                            />
                        )
                    })}
                </div>
            </React.Fragment>
         );
    }
}



const mapStateToProps = (state) => {
    return {
        items: state
    };
};

export default connect(mapStateToProps, null)(RecipeList);