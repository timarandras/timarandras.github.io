import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';

import Index from '../src/pages';

describe('Index', () => {
  test('Matches snapshot', () => {
    useStaticQuery.mockReturnValueOnce({ site: { siteMetadata: { description: 'Dummy site' } } });
    const { container } = render(<Index />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
