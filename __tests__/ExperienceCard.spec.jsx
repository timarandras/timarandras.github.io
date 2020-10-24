import { render } from '@testing-library/react';
import React from 'react';

import ExperienceCard from '../src/components/ExperienceCard';

describe('ExperienceCard', () => {
  test('Matches snapshot', () => {
    const { container } = render(<ExperienceCard />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
