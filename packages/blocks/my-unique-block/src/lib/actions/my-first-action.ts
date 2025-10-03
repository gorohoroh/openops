import { createAction, Property } from '@openops/blocks-framework';

export const myFirstAction = createAction({
  requireToolApproval: false,
  name: 'myFirstAction',
  displayName: 'My first action',
  description: 'What this action does',
  props: {},
  async run() {
    // Action logic here
  },
});
