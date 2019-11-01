import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      },
      {
        title: "Chocolate Cake",
        instructions: "In a large bowl, cream butter and brown sugar until light and fluffy. Add eggs, 1 at a time, beating well after each addition. Beat in vanilla. In another bowl, whisk flour, cocoa, baking soda and salt; add to creamed mixture alternately with sour cream, beating well after each addition. Stir in water until blended. Transfer to 3 greased round baking pans. Bake in 350° until a toothpick comes out clean, 30-35 minutes",
        ingredients: ["1 cup butter", "3 cups brown sugar", "4 large eggs, room temparature", "2 teaspoons vanilla extract", "2-2/3 cups flour", "3/4 cup baking cocoa", "3 teaspoons baking soda", "1/2 teaspoon salt","1-1/3 cups sour cream", "1-1/3 cups boiling water"],
        img: "chocolate_cake.jpg"
      }
    ]
  }
  
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={index} {...r} />
    ));
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  
  }
}

export default RecipeList;
