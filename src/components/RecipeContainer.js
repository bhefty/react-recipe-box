import React, { Component } from 'react'

import RecipeBox from './RecipeBox'
import AddRecipe from './AddRecipe'
import Footer from './Footer'

class RecipeContainer extends Component {
  constructor() {
    super()

    this.state = {
      isShowingAddRecipe: false,
      nameValue: '',
      ingredientsValue: '',
      recipes: JSON.parse(localStorage.getItem('recipes')) || []
    }
    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)
  }
  componentDidMount() {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
    let storedRecipes = JSON.parse(localStorage.getItem('recipes'))
    let setRecipes
    if (storedRecipes === undefined) {
      setRecipes = []
    } else {
      setRecipes = storedRecipes
    }
    this.setState({
      recipes: setRecipes
    })
  }
  componentDidUpdate(){
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
  }
  handleShowModal(status) {
    this.setState({isShowingAddRecipe: status})
  }
  handleSaveRecipe(recipe) {
    let newRecipes = this.state.recipes
    let editedRecipe = newRecipes.filter((i) => {
      return i[0] === recipe[0]
    })
    if (editedRecipe.length === 0) {
      newRecipes.push(recipe)
    } else {
      newRecipes = newRecipes.map((i) => {
        if(i === editedRecipe[0]) {
          i[1] = recipe[1]
        }
        return i
      })
    }
    this.setState({
      recipes: newRecipes,
      nameValue: '',
      ingredientsValue: ''
    })
  }
  deleteRecipe(recipe) {
    let newRecipes = this.state.recipes
    newRecipes = newRecipes.filter((i) => i !== recipe)
    this.setState({recipes: newRecipes})
  }
  editRecipe(recipe) {
    let recipeName = recipe[0]
    let recipeIngredients = recipe[1]
    this.setState({
      isShowingAddRecipe: true,
      nameValue: recipeName,
      ingredientsValue: recipeIngredients
    })
  }
  render() {
    return (
      <div>
        <div className="RecipeContainer">
          <h1 className='jumbotron recipe-header'>Recipe Box</h1>
          <RecipeBox recipes={this.state.recipes}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}/>
          <AddRecipe show={this.state.isShowingAddRecipe}
            toggleModal={this.handleShowModal}
            saveRecipe={this.handleSaveRecipe}
            defaultName={this.state.nameValue}
            defaultIngredients={this.state.ingredientsValue}/>
        </div>
        <Footer/>
      </div>

    );
  }
}

export default RecipeContainer;
