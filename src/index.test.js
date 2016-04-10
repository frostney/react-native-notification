import React from 'react-native';

import test from 'ava';
import Notification from './';
import { render } from 'enzyme';

test(t => {
  const wrapper = render(
    <Notification>Hello world</Notification>
  );

  t.ok(wrapper);
});
