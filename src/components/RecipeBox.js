import React, {Component} from 'react';

import Recipe from './Recipe'

let doc1 = {
    id: 1,
    name: 'Spaghetti',
    ingredients: [
        'Noodles',
        'Sauce',
        'Meatballs'
    ]
}
let doc2 = {
    id: 2,
    name: 'Onion Pie',
    ingredients: [
        'Onion',
        'Pie Crust',
        'Yuck'
    ]
}
let collection = [doc1, doc2]

class RecipeBox extends Component {
    render() {
        return (
            <div className='RecipeBox'>
                <Recipe 
                    item={collection}
                />
            </div>
        );
    }
}

export default RecipeBox;


