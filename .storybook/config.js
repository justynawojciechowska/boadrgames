import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context(
    '../src/components',
    true,
    /.+\/__stories__\/.+\.js/
  );

  req.keys().forEach(req);
}

configure(loadStories, module);
