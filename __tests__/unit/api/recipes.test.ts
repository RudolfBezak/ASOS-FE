describe('Recipes API', () => {
  it('should export getRecipes function', () => {
    const recipesApi = require('../../../lib/api/recipies');
    expect(recipesApi.getRecipes).toBeDefined();
  });

  it('should export getRecipeById function', () => {
    const recipesApi = require('../../../lib/api/recipies');
    expect(recipesApi.getRecipeById).toBeDefined();
  });

  it('should export createRecipe function', () => {
    const recipesApi = require('../../../lib/api/recipies');
    expect(recipesApi.createRecipe).toBeDefined();
  });
});
