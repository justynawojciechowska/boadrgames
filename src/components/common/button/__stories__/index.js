import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../ButtonComponent';

storiesOf('Button', module).add('buttons', () => (
  <div>
    <Button onClick={action('clicked')} className="button-reverse">
      Hello Button
    </Button>
    <Button onClick={action('clicked')} className="button-white">
      Hello Button
    </Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
  </div>
));
