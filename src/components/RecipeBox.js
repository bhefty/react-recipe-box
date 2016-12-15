import React, {Component} from 'react';

import Recipe from './Recipe'

class RecipeBox extends Component {
    render() {
        return (
            <div className='RecipeBox'>
                <Recipe
                    recipes={this.props.recipes}
                    deleteRecipe={this.props.deleteRecipe}
                    editRecipe={this.props.editRecipe}
                />
            </div>
        );
    }
}

export default RecipeBox;
