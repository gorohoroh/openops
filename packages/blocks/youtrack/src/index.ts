import { createCustomApiCallAction } from '@openops/blocks-common';
import { createBlock, Property } from '@openops/blocks-framework';
import { BlockCategory } from '@openops/shared';
import { youtrackAuth } from './lib/auth';

export const youtrack = createBlock({
  displayName: 'Youtrack',
  auth: youtrackAuth,
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://static.openops.com/blocks/youtrack.png',
  authors: [],
  categories: [BlockCategory.FINOPS],
  actions: [
    createCustomApiCallAction({
      baseUrl: () => 'https://api.youtrack.com',
      auth: youtrackAuth,
      additionalProps: {
        documentation: Property.MarkDown({
          value:
            'For more information, visit the [Youtrack API documentation](https://docs.youtrack.com/reference/introduction).',
        }),
      },
    }),
  ],
  triggers: [],
});
