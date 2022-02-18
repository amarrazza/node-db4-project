const db = require('../../data/db-config')

async function getRecipeById(recipe_id){
    const recipeRows = await db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'i.ingredients_id', 'si.ingredient_id')
        .select('s.*', 'recipe_name', 'quantity', 'ingredient_name', 'ingredient_unit')
        .where('r.recipe_id', recipe_id)
    
    const result = {
        recipe_id: recipeRows[0].recipe_id,
        recipe_name: recipeRows[0].recipe_name,
        steps: []
    }

    recipeRows.map(row => {
        if(row.quantity){
            result.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.instructions,
                ingredients: row.ingredient_name
            })
        } else {
            result.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.instructions,
            })
        }
    })
    
    return result;
  
}

module.exports = {
    getRecipeById
}