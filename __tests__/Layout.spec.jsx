import { render } from '@testing-library/react';
import React from 'react';

import Layout from '../src/components/Layout';

describe('Layout', () => {
  test('Matches snapshot', () => {
    const { container } = render(
      <Layout>
        <div>content</div>
      </Layout>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Has correct content', () => {
    const { getByText } = render(<Layout>content</Layout>);

    expect(getByText('content')).toHaveTextContent('content');
  });

  it('Has maxWidth set to large', () => {
    const { getByText } = render(<Layout>content</Layout>);

    expect(getByText('content').closest('div')).toHaveClass('MuiContainer-maxWidthLg');
  });
});
