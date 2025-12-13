describe('Reviews API', () => {
  it('should export addReview function', () => {
    const reviewsApi = require('../../../lib/api/reviews');
    expect(reviewsApi.addReview).toBeDefined();
  });

  it('should export getRecipeReviews function', () => {
    const reviewsApi = require('../../../lib/api/reviews');
    expect(reviewsApi.getRecipeReviews).toBeDefined();
  });

  it('should export deleteReview function', () => {
    const reviewsApi = require('../../../lib/api/reviews');
    expect(reviewsApi.deleteReview).toBeDefined();
  });
});
