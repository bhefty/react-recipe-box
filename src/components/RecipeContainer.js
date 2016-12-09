import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import RecipeBox from './RecipeBox'

class RecipeContainer extends Component {
  render() {
    return (
      <div className="RecipeContainer">
        <RecipeBox/>
        <Button
          bsStyle='success'
          bsSize='large'
          className='pull-left'>
          Add Recipe
        </Button>
      </div>
    );
  }
}

export default RecipeContainer;
