import { BlockAuth } from '@openops/blocks-framework';

export const youtrackAuth = BlockAuth.SecretAuth({
  displayName: 'API Key',
  required: true,
  authProviderKey: 'youtrack',
  authProviderDisplayName: 'Youtrack',
  authProviderLogoUrl: 'https://static.openops.com/blocks/youtrack.png',
  description: '',
});
