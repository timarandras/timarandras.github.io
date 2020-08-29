import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../src/components/layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout>
          <div>content</div>
        </Layout>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Has correct content', () => {
    const { getByText } = render(<Layout>content</Layout>);

    expect(getByText('content')).toHaveTextContent('content');
  });
});
