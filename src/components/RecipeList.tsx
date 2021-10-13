import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import { Recipe } from './Recipe';
import RECIPES from '../json/recipes.json';
import { RecipeType } from '../interfaces/recipe';
import { useState } from 'react';

export const RecipeList = (): JSX.Element => {
	const [recipes, setRecipes] = useState<RecipeType[]>(RECIPES as RecipeType[]);
	return (
		<Accordion>
			{recipes.map((e, i) => <Recipe name={e.name} desc={e.description} type={e.type} servings={e.servings} difficulty={e.difficulty} ing={e.ingredients} steps={e.steps} eventKey={String(i)}/>)}
		</Accordion>
	);
};
