import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap'

import RecipeForm from './RecipeForm'

class AddRecipe extends Component {
    constructor() {
        super()
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.save = this.save.bind(this)
    }
    open() {
        this.props.toggleModal(true)
    }
    close() {
        this.props.toggleModal(false)
    }
    save(recipe) {
        this.props.saveRecipe(recipe)
        this.props.toggleModal(false)
    }
    render() {
        return (
            <div className='static-modal'>
                <Button
                    bsStyle='success'
                    bsSize='large'
                    block
                    onClick={this.open}>
                    Add Recipe
                </Button>
                <Modal show={this.props.show}
                    onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Recipe</Modal.Title>
                    </Modal.Header>
                    <RecipeForm
                      cancelRecipe={this.close}
                      saveRecipe={this.save}
                      name={this.props.defaultName}
                      ingredients={this.props.defaultIngredients}/>
                </Modal>
            </div>
        );
    }
}

AddRecipe.propTypes = {
    toggleModal: React.PropTypes.func.isRequired
}

export default AddRecipe;
