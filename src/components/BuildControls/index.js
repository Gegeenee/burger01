import React from "react";

import BuildControl from "../BuildControl"
import css from "./style.module.css";

const BuildControls = props => (
    <div className={css.BuildControls}>
        <p>
            Бүргерийн үнэ : <strong>{props.price}</strong>
        </p>
        <BuildControl
            ortsHasah={() => props.ortsHasah("salad")}
            ortsNemeh={props.ortsNemeh}
            disabled={props.disabledIngredients}
            type="salad"
            orts="Салат"
        />
        <BuildControl
            ortsHasah={() => props.ortsHasah("bacon")}
            ortsNemeh={props.ortsNemeh}
            disabled={props.disabledIngredients}
            type="bacon"
            orts="Гахайн мах"
        />
        <BuildControl
            ortsHasah={() => props.ortsHasah("cheese")}
            ortsNemeh={props.ortsNemeh}
            disabled={props.disabledIngredients}
            type="cheese"
            orts="Бяслаг"
        />
        <BuildControl
            ortsHasah={() => props.ortsHasah("meat")}
            ortsNemeh={props.ortsNemeh}
            disabled={props.disabledIngredients}
            type="meat"
            orts="Үхрийн мах"
        />
    </div>
);

export default BuildControls;