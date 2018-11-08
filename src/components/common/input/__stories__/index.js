import React from 'react';

import { storiesOf } from '@storybook/react';

import Input from '../index';

storiesOf('Input', module)
  .add('classic input', () => <Input />)
  .add('input with label', () => <Input addonBefore="hello" />)
  .add('input search', () => <Input component={Input.Search} />);
