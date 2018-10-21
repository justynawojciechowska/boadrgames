import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../ButtonComponent';

storiesOf('Button', module).add('buttons', () => (
  <div>
    <Button onClick={action('clicked')} className="btn-reverse">
      Hello Button
    </Button>
    <Button onClick={action('clicked')} className="btn-white">
      Hello Button
    </Button>
    <Button onClick={action('clicked')}>Hello Button</Button>
  </div>
));
