import React from "react";
import classes from "./BuildContorls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacaon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];
const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.addIngedient(ctrl.type)}
        removed={() => props.removeIngredient(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
  </div>
);

export default buildControls;
