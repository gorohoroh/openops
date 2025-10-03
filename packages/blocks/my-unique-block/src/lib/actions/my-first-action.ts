import { createAction, Property } from '@openops/blocks-framework';
import { httpClient, HttpMethod } from '@openops/blocks-common';

export const myFirstAction = createAction({
  requireToolApproval: false,
  name: 'myFirstAction',
  displayName: 'My first action',
  description: 'What this action does',
  props: {},
  async run(context) {
    const res = await httpClient.sendRequest<string[]>({
      method: HttpMethod.GET,
      url: 'https://httpbin.org/get',
    });
    return res.body;
  },
});
