export const mockRecipes = [
  {
    id: 1,
    title: 'Test Recipe 1',
    description: 'Test description',
    ingredients: [
      { name: 'ingredient 1', amount: '100', unit: 'g' }
    ],
    steps: ['Step 1', 'Step 2'],
    category_id: 1,
    difficulty: 'easy',
    prep_time_minutes: 30,
    avg_rating: 4.5,
    servings: 4,
    author_id: 'test-user-id',
    created_at: '2025-01-01T00:00:00Z',
    categories: {
      id: 1,
      name: 'Test Category',
      icon: 'test-icon'
    },
    recipe_tags: [],
    recipe_images: []
  },
  {
    id: 2,
    title: 'Test Recipe 2',
    description: 'Another test',
    ingredients: [
      { name: 'ingredient 2', amount: '200', unit: 'ml' }
    ],
    steps: ['Step 1'],
    category_id: 2,
    difficulty: 'medium',
    prep_time_minutes: 45,
    avg_rating: 4.0,
    servings: 2,
    author_id: 'test-user-id',
    created_at: '2025-01-02T00:00:00Z',
    categories: {
      id: 2,
      name: 'Another Category',
      icon: 'another-icon'
    },
    recipe_tags: [],
    recipe_images: []
  }
];

export const mockProfile = {
  id: 'test-user-id',
  name: 'Test User',
  avatar_url: 'https://example.com/avatar.jpg',
  created_at: '2025-01-01T00:00:00Z'
};

export const mockUser = {
  id: 'test-user-id',
  email: 'test@example.com',
  created_at: '2025-01-01T00:00:00Z'
};

export const mockRatings = [
  {
    id: 1,
    user_id: 'test-user-id',
    recipe_id: 1,
    stars: 5,
    created_at: '2025-01-01T00:00:00Z'
  }
];

export const mockReviews = [
  {
    id: 1,
    user_id: 'test-user-id',
    recipe_id: 1,
    text: 'Great recipe!',
    created_at: '2025-01-01T00:00:00Z',
    profiles: mockProfile
  }
];

export const mockSavedRecipes = [
  {
    id: 1,
    user_id: 'test-user-id',
    recipe_id: 1,
    is_favorite: true,
    created_at: '2025-01-01T00:00:00Z',
    recipes: mockRecipes[0]
  }
];

export const mockCategories = [
  { id: 1, name: 'Breakfast', icon: 'morning' },
  { id: 2, name: 'Lunch', icon: 'noon' },
  { id: 3, name: 'Dinner', icon: 'evening' }
];

export const mockTags = [
  { id: 1, name: 'vegetarian' },
  { id: 2, name: 'vegan' },
  { id: 3, name: 'gluten-free' }
];
