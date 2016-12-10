import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap'

class RecipeForm extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClose = this.onClose.bind(this)
    }
    onSubmit(e) {
        e.preventDefault()
        let recipeName = this.refs.name.value
        let recipeIngredients = this.refs.ingredients.value
        recipeIngredients = recipeIngredients.split(/,\s*/)
        let submittedRecipe = [recipeName, recipeIngredients]
        this.props.saveRecipe(submittedRecipe)
    }
    onClose() {
        this.props.cancelRecipe()
    }
    render() {
        return (
            <form ref='form' onSubmit={this.onSubmit}>
                <Modal.Body>
                    <div className='form-group'>
                        <label>Recipe</label>
                        <input className='form-control' type='text' ref='name'
                            placeholder='Recipe Name' />
                    </div>
                    <div className='form-group'>
                        <label>Ingredients</label>
                        <input className='form-control' type='text' ref='ingredients'
                            placeholder='Enter ingredients, separated by commas' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onClose}>Close</Button>
                    <Button bsStyle='primary' onClick={this.onSubmit}>Save Recipe</Button>
                </Modal.Footer>
            </form>
        );
    }
}

export default RecipeForm;