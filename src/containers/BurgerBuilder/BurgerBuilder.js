import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       ingredients: {
  //         salad: 2,
  //         bacon: 1,
  //         cheese: 2,
  //         meat: 1
  //       }
  //     };
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  addIngredients = type => {
    const oldCount = this.state.ingredients[type];    
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    this.setState({
      ingredients: updatedIngredients
    });
  };

  removeIngredients = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount !== 0){
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      this.setState({
        ingredients: updatedIngredients
      });
    }
   
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngedient={this.addIngredients}  removeIngredient={this.removeIngredients} />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
