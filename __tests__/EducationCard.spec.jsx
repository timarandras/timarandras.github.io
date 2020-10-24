import { render } from '@testing-library/react';
import React from 'react';

import EducationCard from '../src/components/EducationCard';

describe('EducationCard', () => {
  test('Matches snapshot', () => {
    const { container } = render(<EducationCard />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
