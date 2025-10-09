import { youtrack } from '../src/index';

describe('block declaration tests', () => {
  test('should return block with correct authentication', () => {
    expect(youtrack.auth).toMatchObject({
      type: 'SECRET_TEXT',
      required: true,
      authProviderKey: 'youtrack',
      authProviderDisplayName: 'YouTrack',
      authProviderLogoUrl:
        'https://resources.jetbrains.com/storage/products/company/brand/logos/YouTrack_icon.png',
    });
  });

  test('should return block with correct number of actions', () => {
    expect(Object.keys(youtrack.actions()).length).toBe(1);
    expect(youtrack.actions()).toMatchObject({
      custom_api_call: {
        name: 'custom_api_call',
        requireAuth: true,
      },
    });
  });
});
