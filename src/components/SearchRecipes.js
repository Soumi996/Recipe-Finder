import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetRecipes } from '../action';
import { bindActionCreators } from 'redux';

class SearchRecipes extends Component {
    state = { 
        Ingredients: '',
        Dish: ''
     }

    search() {        
        const { Ingredients, Dish } = this.state
        const url = `http://www.recipepuppy.com/api/?i=${Ingredients},garlic&q=${Dish}`
        fetch(url,{
            method: 'GET'
        }).then(response => response.json())
            .then(json => this.props.SetRecipes(json.results));
    }

    render() { 
        return (
                    <div className="container">
                        <div className="row" style={{ marginTop: '15%' }}>
                            <div className="col-md-12 offset-md-3 form-inline">
                                <div className="form-group mx-sm-1 mb-2">
                                    <input type="text" className="form-control" id="input1" placeholder="Ingredients" onChange={event => this.setState({ Ingredients: event.target.value })}></input>
                                </div>
                                <div className="form-group mx-sm-1 mb-2">
                                    <input type="text" className="form-control" id="input2" placeholder="Dish" onChange={event => this.setState({ Dish: event.target.value })}></input>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2" onClick={() => this.search()}>Search</button>
                            </div>
                        </div>
                    </div>
        );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ SetRecipes },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchRecipes);