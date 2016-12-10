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
  }
  handleShowModal(status) {
    this.setState({isShowingAddRecipe: status})
  }
  handleSaveRecipe(recipe) {
    let newRecipes = this.state.recipes
    newRecipes.push(recipe)
    this.setState({recipes: newRecipes})
  }
  render() {
    return (
      <div className="RecipeContainer">
        <RecipeBox recipes={this.state.recipes}/>
        <AddRecipe show={this.state.isShowingAddRecipe}
          toggleModal={this.handleShowModal}
          saveRecipe={this.handleSaveRecipe}/> 
      </div>
    );
  }
}

export default RecipeContainer;


// handleAddRecipe() {
//     console.log('clicked!')
    
//     console.log(this.state.recipes)

//     let newArray = this.state.recipes
//     newArray.push([
//         'Cake',
//         [
//           'Flour',
//           'Eggs',
//           'Milk'
//         ]
//       ])
//     this.setState({recipes: newArray})
//     console.log(this.state.recipes)
//   }