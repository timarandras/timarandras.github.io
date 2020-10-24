import { render } from '@testing-library/react';
import React from 'react';

import PersonalCard from '../src/components/PersonalCard';

describe('PersonalCard', () => {
  test('Matches snapshot', () => {
    const { container } = render(<PersonalCard />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
