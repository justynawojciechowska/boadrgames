import { configure } from '@storybook/react';

import './pageStyles.css';

function loadStories() {
  const req = require.context(
    '../src/components',
    true,
    /.+\/__stories__\/.+\.js/
  );

  req.keys().forEach(req);
}

configure(loadStories, module);
