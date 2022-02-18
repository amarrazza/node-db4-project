const recipes = [
    { recipe_name: 'Pesto Pasta' },
    { recipe_name: 'Lasagna' },
    { recipe_name: 'Pad Thai' },
]

const ingredients = [
    { ingredient_name: 'Pesto', ingredient_unit: 'lbs' },
    { ingredient_name: 'Pasta', ingredient_unit: 'lbs' },
    { ingredient_name: 'Tomato Sauce', ingredient_unit: 'oz' },
    { ingredient_name: 'Peanuts', ingredient_unit: 'lbs' },
]

const steps = [
    { instructions: 'Boil water', step_number: 1, recipe_id: 1 },
    { instructions: 'Cook pasta', step_number: 2, recipe_id: 1 },
    { instructions: 'Add pesto', step_number: 3, recipe_id: 1 },

    { instructions: 'Boil water', step_number: 1, recipe_id: 2 },
    { instructions: 'Cook pasta', step_number: 2, recipe_id: 2 },
    { instructions: 'Add sauce', step_number: 3, recipe_id: 2 },

    { instructions: 'Boil water', step_number: 1, recipe_id: 3 },
    { instructions: 'Cook pasta', step_number: 2, recipe_id: 3 },
    { instructions: 'Add peanuts', step_number: 3, recipe_id: 3 }
]

const step_ingredients = [
    { step_id: 2, ingredient_id: 2, quantity: 1 },
    { step_id: 3, ingredient_id: 1, quantity: 0.2 },

    { step_id: 5, ingredient_id: 2, quantity: 1 },
    { step_id: 6, ingredient_id: 3, quantity: 0.5 },

    { step_id: 8, ingredient_id: 2, quantity: 1 },
    { step_id: 9, ingredient_id: 4, quantity: 0.8 },
]

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
    
}