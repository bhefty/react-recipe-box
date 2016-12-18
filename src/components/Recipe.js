import React, {Component} from 'react'
import { Accordion, Button, Panel, ListGroup, ListGroupItem, Well } from 'react-bootstrap'

class Recipe extends Component {
    constructor() {
      super()
      this.renderPanel = this.renderPanel.bind(this)
      this.onDelete = this.onDelete.bind(this)
      this.onEdit = this.onEdit.bind(this)
    }
    onDelete(recipe) {
      this.props.deleteRecipe(recipe.item)
    }
    onEdit(recipe) {
      this.props.editRecipe(recipe.item)
    }
    renderPanel() {
      if (this.props.recipes.length === 0) {
        return (
          <Panel key={'no-recipes'}
            eventKey={'no-recipes'}
            bsStyle='primary'
            header='No Recipes! Add one below!'></Panel>
        )
      } else {
        let renderObj = this.props.recipes.map((item) => {
            return (
            <Panel key={item[0]}
                eventKey={item[0]}
                header={item[0]}
                bsStyle='success'>
                    <h3 className='recipe-header'>Ingredients</h3>
                    <ListGroup fill>
                    {item[1].map((ingredient) => {
                        return <ListGroupItem key={ingredient}>{ingredient}</ListGroupItem>
                    })}
                  </ListGroup>
                  <div className='row'>
                    <Button bsStyle='danger'
                      bsSize='large'
                      className='col-xs-6 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2'
                      onClick={() => {this.onDelete({item})}}>
                      Delete
                    </Button>
                    <Button bsStyle='info'
                      bsSize='large'
                      className='col-xs-6 col-sm-4 col-sm-offset-2 col-md-3 col-md-offset-2'
                      onClick={() => {this.onEdit({item})}}>
                      Edit
                    </Button>
                  </div>
            </Panel>

        )
        })
        return renderObj
      }
    }
    render() {
        return (
            <Well bsSize='small'>
                <Accordion>
                    {this.renderPanel()}
                </Accordion>
            </Well>
        );
    }
}

export default Recipe
