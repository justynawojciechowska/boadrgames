import React from 'react';

import { storiesOf } from '@storybook/react';

import Heading from '../HeadingComponent';

storiesOf('Headings', module).add('headings', () => (
  <div>
    <Heading as="h1">Hello h1</Heading>
    <Heading as="h2">Hello h2</Heading>
    <Heading as="h3">Hello h3</Heading>
    <Heading as="h4">Hello h4</Heading>
  </div>
));
