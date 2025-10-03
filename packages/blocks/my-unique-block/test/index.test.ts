import { myUniqueBlock } from '../src/index';

describe('block declaration tests', () => {
  test('should return block with correct authentication', () => {
    expect(myUniqueBlock.auth).toBeUndefined();
  });

  test('should return block with correct number of actions', () => {
    expect(Object.keys(myUniqueBlock.actions()).length).toBe(0);
  });
});
