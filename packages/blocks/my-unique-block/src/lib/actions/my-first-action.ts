import { createAction, Property } from '@openops/blocks-framework';

export const myFirstAction = createAction({
  name: 'myFirstAction',
  displayName: 'My first action',
  description: 'What this action does',
  props: {},
  async run() {
    // Action logic here
  },
});
