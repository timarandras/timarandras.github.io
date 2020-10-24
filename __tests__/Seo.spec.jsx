import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import React from 'react';

import Seo from '../src/components/Seo';

jest.mock('gatsby');

describe('Seo', () => {
  test('Matches snapshot', () => {
    useStaticQuery.mockReturnValueOnce({ site: { siteMetadata: { description: 'Dummy site' } } });
    const { container } = render(<Seo title="dummy" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
