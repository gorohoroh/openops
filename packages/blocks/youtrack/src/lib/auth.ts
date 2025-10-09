import { BlockAuth } from '@openops/blocks-framework';

export const youtrackAuth = BlockAuth.SecretAuth({
  displayName: 'API Key',
  required: true,
  authProviderKey: 'youtrack',
  authProviderDisplayName: 'YouTrack',
  authProviderLogoUrl: 'https://static.openops.com/blocks/youtrack.png',
  description: '',
});
