import React from 'react';
import Recipe from './Recipe'
import './RecipeApp.css';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe 
        title="pasta" 
        ingredients={['flour', 'water']}
        instructions={["Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce"]}
        img="spaghetti.jpg"
        />
    </div>
  );
}

export default RecipeApp;
