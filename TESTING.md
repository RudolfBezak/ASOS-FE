# Testing

## Run Tests

```bash
npm test
```

## Write New Tests

Create test file in `__tests__/unit/` or `__tests__/integration/`:

```typescript
describe('Module Name', () => {
  it('test description', () => {
    const module = require('../../../lib/api/module');
    expect(module.functionName).toBeDefined();
  });
});
```

File naming: `[module].test.ts`
