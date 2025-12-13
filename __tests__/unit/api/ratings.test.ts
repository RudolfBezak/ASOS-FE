describe('Ratings API', () => {
  it('should export addRating function', () => {
    const ratingsApi = require('../../../lib/api/ratings');
    expect(ratingsApi.addRating).toBeDefined();
  });

  it('should export getUserRating function', () => {
    const ratingsApi = require('../../../lib/api/ratings');
    expect(ratingsApi.getUserRating).toBeDefined();
  });

  it('should export getAverageRating function', () => {
    const ratingsApi = require('../../../lib/api/ratings');
    expect(ratingsApi.getAverageRating).toBeDefined();
  });
});
