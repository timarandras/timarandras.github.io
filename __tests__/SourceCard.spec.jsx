import { render } from '@testing-library/react';
import React from 'react';

import SourceCard from '../src/components/SourceCard';

describe('SourceCard', () => {
  test('Matches snapshot', () => {
    const { container } = render(<SourceCard />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('Link points to GH', () => {
    const { getByText } = render(<SourceCard />);
    expect(getByText(/View source/)).toHaveAttribute('href', 'https://github.com/timarandras/timarandras.github.io');
  });
  test('Text is center aligned', () => {
    const { getByText } = render(<SourceCard />);

    expect(getByText(/View source/).closest('p')).toHaveClass('MuiTypography-alignCenter');
  });
});
