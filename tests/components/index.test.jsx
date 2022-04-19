import React from 'react';
import { render } from '@testing-library/react';
import Home from 'components/index';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<Home />', () => {
  it('works', () => {
    expect.hasAssertions();
    const { getByText } = render(<Home />);
    const element = getByText('Hello!');
    expect(element).toBeInTheDocument();
  });
});
