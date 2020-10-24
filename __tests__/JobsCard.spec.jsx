import { render } from '@testing-library/react';
import React from 'react';

import JobsCard from '../src/components/JobsCard';

describe('JobsCard', () => {
  test('Matches snapshot', () => {
    const { container } = render(<JobsCard />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
