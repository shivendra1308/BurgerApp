import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    // This is my method
    // let trans = [] ;
    //  for(let keys in props.ingredients){
    //     let   value = [props.ingredients[keys]];
    //      for( let i = 0; i <= value; i++ ) {
    //        trans.push( <BurgerIngredient key={keys + i} type={keys} />) ;   
    //      };
    // }

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {           
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients} 
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;