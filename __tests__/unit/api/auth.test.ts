describe('Auth API', () => {
  it('should export register function', () => {
    const authApi = require('../../../lib/api/auth');
    expect(authApi.register).toBeDefined();
  });

  it('should export login function', () => {
    const authApi = require('../../../lib/api/auth');
    expect(authApi.login).toBeDefined();
  });

  it('should export logout function', () => {
    const authApi = require('../../../lib/api/auth');
    expect(authApi.logout).toBeDefined();
  });
});
