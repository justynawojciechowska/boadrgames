import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../ButtonComponent';

storiesOf('Button', module)
  .add('button classic', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('button reverse', () => (
    <Button onClick={action('clicked')} className="button-reverse">
      Hello Button
    </Button>
  ))
  .add('button big', () => (
    <Button onClick={action('clicked')} className="button-big">
      Hello Button
    </Button>
  ))
  .add('button small', () => (
    <Button onClick={action('clicked')} className="button-small">
      Hello Button
    </Button>
  ));
