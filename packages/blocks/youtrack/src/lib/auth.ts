import { BlockAuth } from '@openops/blocks-framework';

export const youtrackAuth = BlockAuth.SecretAuth({
  displayName: 'API Key',
  required: true,
  authProviderKey: 'youtrack',
  authProviderDisplayName: 'YouTrack',
  authProviderLogoUrl:
    'https://resources.jetbrains.com/storage/products/company/brand/logos/YouTrack_icon.png',
  description: '',
});
