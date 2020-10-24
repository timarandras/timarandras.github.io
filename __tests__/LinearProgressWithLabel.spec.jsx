import { render } from '@testing-library/react';
import React from 'react';

import LinearProgressWithLabel from '../src/components/LinearProgressWithLabel';

describe('LinearProgressWithLabel', () => {
  test('Matches snapshot', () => {
    const { container } = render(<LinearProgressWithLabel value={5} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  test('Renders a 50% progress bar', () => {
    const { container } = render(<LinearProgressWithLabel value={3} />);
    expect(container.querySelector('.MuiLinearProgress-bar')).toHaveAttribute('style', 'transform: translateX(-70%);');
  });
});
