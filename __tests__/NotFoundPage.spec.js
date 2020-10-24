import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';

import NotFoundPage from '../src/pages/404';

describe('NotFoundPage', () => {
  test('Matches snapshot', () => {
    useStaticQuery.mockReturnValueOnce({ site: { siteMetadata: { description: 'Dummy site' } } });
    const { container } = render(<NotFoundPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
