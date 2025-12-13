describe('Saved Recipes API', () => {
  it('should export saveRecipe function', () => {
    const savedApi = require('../../../lib/api/saved');
    expect(savedApi.saveRecipe).toBeDefined();
  });

  it('should export getSavedRecipes function', () => {
    const savedApi = require('../../../lib/api/saved');
    expect(savedApi.getSavedRecipes).toBeDefined();
  });

  it('should export toggleFavorite function', () => {
    const savedApi = require('../../../lib/api/saved');
    expect(savedApi.toggleFavorite).toBeDefined();
  });
});
