import React from 'react';
import { render } from '@testing-library/react';
import Fund from 'components/Basket/helpers/Fund';
import { wrapProvider } from '../../../helpers';

describe('<Fund />', () => {
  it('works', () => {
    expect.hasAssertions();
    const { container } = render(
      wrapProvider(<Fund />),
    );
    const header = container.querySelector('.sub-header h3').textContent;
    expect(header).toBe('Fund');
  });
});
