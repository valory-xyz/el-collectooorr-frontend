import React from 'react';
import { render } from '@testing-library/react';
import Home from 'components/index';

describe('<Home />', () => {
  it('works', () => {
    expect.hasAssertions();
    const { getByText } = render(<Home />);
    const element = getByText('Hello!');
    expect(element).toBeInTheDocument();
  });
});
