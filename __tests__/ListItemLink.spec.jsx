import { render } from '@testing-library/react';
import React from 'react';

import ListItemLink from '../src/components/ListItemLink';

describe('ListItemLink', () => {
  test('Matches snapshot', () => {
    const { container } = render(<ListItemLink href="#dummy" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Renders an <a> with href', () => {
    const { container } = render(<ListItemLink href="#dummy" />);

    expect(container.querySelector('a')).toHaveAttribute('href', '#dummy');
  });
});
