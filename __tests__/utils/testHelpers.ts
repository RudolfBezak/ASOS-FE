export const createSupabaseResponse = (data, error = null) => ({
  data,
  error,
  count: null,
  status: error ? 400 : 200,
  statusText: error ? 'Bad Request' : 'OK'
});

export const createSupabaseError = (message, code = 'PGRST000') => ({
  message,
  code,
  details: '',
  hint: ''
});

export const mockSupabaseQuery = (returnData) => {
  const queryMock = {
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    lte: jest.fn().mockReturnThis(),
    gte: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    single: jest.fn().mockResolvedValue(createSupabaseResponse(returnData)),
    then: jest.fn((callback) => callback(createSupabaseResponse(returnData)))
  };
  
  queryMock.then = jest.fn((callback) => 
    Promise.resolve(createSupabaseResponse(returnData)).then(callback)
  );
  
  return queryMock;
};

export const mockSupabaseFrom = (tableName, returnData) => {
  return jest.fn().mockReturnValue(mockSupabaseQuery(returnData));
};

export const waitFor = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

export const createMockNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  setParams: jest.fn(),
});

// Helper to create a mock route object
export const createMockRoute = (params = {}) => ({
  key: 'test-route',
  name: 'TestScreen',
  params,
});
