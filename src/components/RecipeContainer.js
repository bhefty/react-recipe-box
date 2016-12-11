import React, { Component } from 'react'

import RecipeBox from './RecipeBox'
import AddRecipe from './AddRecipe'

class RecipeContainer extends Component {
  constructor() {
    super()
    this.state = {
      isShowingAddRecipe: false,
      recipes: [
          [
              'Spaghetti',
              [
                  'Noodles',
                  'Sauce',
                  'Meatballs'
              ]
          ],
          [
              'Cereal',
              [
                  'Dry cereal',
                  'Milk'
              ]
          ]
      ]
    }
    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
  }
  handleShowModal(status) {
    this.setState({isShowingAddRecipe: status})
  }
  handleSaveRecipe(recipe) {
    let newRecipes = this.state.recipes
    newRecipes.push(recipe)
    this.setState({recipes: newRecipes})
  }
  deleteRecipe(recipe) {
    this.setState({
      recipes: this.state.recipes.filter((_, i) => i !== recipe)
    })
  }
  render() {
    return (
      <div className="RecipeContainer">
        <RecipeBox recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe}/>
        <AddRecipe show={this.state.isShowingAddRecipe}
          toggleModal={this.handleShowModal}
          saveRecipe={this.handleSaveRecipe}/> 
      </div>
    );
  }
}

export default RecipeContainer;