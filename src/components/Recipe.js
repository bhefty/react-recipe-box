import React, {Component} from 'react'
import { Accordion, Panel } from 'react-bootstrap'

class Recipe extends Component {
    constructor() {
        super()
        this.renderPanel = this.renderPanel.bind(this)
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