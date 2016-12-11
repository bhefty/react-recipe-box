import React, {Component} from 'react'
import { Accordion, Button, Panel } from 'react-bootstrap'

class Recipe extends Component {
    constructor() {
        super()
        this.renderPanel = this.renderPanel.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }
    onDelete(recipe) {
        this.props.deleteRecipe(recipe.item)
    }
    renderPanel() {
        let renderObj = this.props.recipes.map((item) => {
            return (
            <Panel key={item[0]}
                eventKey={item[0]}
                header={item[0]}>
                    <ul>
                    {item[1].map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>
                    })}
                    </ul>
                    <Button bsStyle='danger' onClick={() => {this.onDelete({item})}}>Delete</Button>
                    <Button bsStyle='info'>Edit</Button>
            </Panel> 
        )
        })
        return renderObj
        
    }
    render() {
        return (
            <div>
                <Accordion>
                    {this.renderPanel()}            
                </Accordion>
            </div>
        );
    }
}

export default Recipe