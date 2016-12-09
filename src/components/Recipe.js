import React, {Component} from 'react'
import { Accordion, Panel } from 'react-bootstrap'

class Recipe extends Component {
    constructor() {
        super()
        this.renderPanel = this.renderPanel.bind(this)
    }
    renderPanel() {
        let renderObj = this.props.item.map((item) => {
            return (
            <Panel key={item.id}
                eventKey={item.id}
                header={item.name}>
                    <ul>
                    {item.ingredients.map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>
                    })}
                    </ul>
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