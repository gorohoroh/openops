import { BlockAuth, createBlock } from '@openops/blocks-framework';

export const myUniqueBlock = createBlock({
  displayName: 'My-unique-block',
  auth: BlockAuth.None(),
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://static.openops.com/blocks/my-unique-block.png',
  authors: [],
  actions: [],
  triggers: [],
});
