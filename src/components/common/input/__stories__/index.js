import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from '../index';

storiesOf('Input', module).add('buttons', () => (
  <div>
    <Input />
    <Input component={Input.Search} />
  </div>
));
