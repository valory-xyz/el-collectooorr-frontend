import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getBalance } from 'common-util/functions';
import Fund from 'components/Basket/helpers/Fund';
import { addFunds } from 'components/Basket/utils';
import { wrapProvider } from '../../../helpers';


// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<Fund />', () => {
  it('accepts fund and everything renders as expected', async () => {
    expect.hasAssertions();

    const props = {
      userVTKBalance: 10,
      vaultBalanceOf: 2000,
      vaultSymbol: 'VLT1',
      vaultTotalSupply: 10000,
    };
    const { container } = render(wrapProvider(<Fund {...props} />));

    /* header & status */
    const header = container.querySelector('.sub-header h3').textContent;
    expect(header).toBe('Fund');

    const status = container.querySelector('.vault-status').textContent;
    expect(status).toBe('OPEN');

    /* progress */
    const progressContainer = container.querySelector('.ant-progress');
    const progressWidth = progressContainer.querySelector(
      '.ant-progress-inner > .ant-progress-bg',
    );
    expect(progressWidth).toHaveStyle('width: 80%');

    const progressStartText = container.querySelector('.progress-start').textContent;
    expect(progressStartText).toBe('0 ETH');

    const progress = container.querySelector('.progress-center').textContent;
    expect(progress).toBe('8 ETH');

    const progressEndText = container.querySelector('.progress-end').textContent;
    expect(progressEndText).toBe('10 ETH(full)');

    /* you funded */
    const youFunded = container.querySelector(
      '.add-funds-header > h3',
    ).textContent;
    expect(youFunded).toBe('0.01 ETH');

    /* input & add button */
    const addFundsInput = container.querySelector('.add-funds-form > input');
    expect(addFundsInput).toBeEnabled();

    /* you receive & management fee */
    const youWillReceived = container.querySelector('.you-will-receive').textContent;
    expect(youWillReceived).toBe('You will receive -- VLT1');

    const managementFeeText = container.querySelector('.management-fees').textContent;
    expect(managementFeeText).toBe(
      'Management fee of 5% ETH will be charged.Learn more',
    );

    /* fund-footer warning */
    const fundFooter = container.querySelector('.warning').textContent;
    expect(fundFooter).toBe(
      'Added ETH cannot be retrieved, but a secondary market for VLT1 may emerge.',
    );
  });

  it('disables/enables button on correct when valid funds are added', async () => {
    expect.hasAssertions();

    const props = {
      userVTKBalance: 10,
      vaultBalanceOf: 2000,
      vaultSymbol: 'VLT1',
      vaultTotalSupply: 10000,
    };

    const { getByTestId } = render(
      wrapProvider(<Fund {...props} />, { balance: 2 }),
    );

    const addFundsInput = getByTestId('add-funds-input');
    const addFundsBtn = getByTestId('add-funds-button');

    // button will be disabled when there are no inputs
    expect(addFundsBtn).not.toBeEnabled();

    // user types 0
    userEvent.type(addFundsInput, '0');
    await waitFor(async () => expect(addFundsBtn).not.toBeEnabled());
    userEvent.clear(addFundsInput);

    // user types 0 with decimals
    userEvent.type(addFundsInput, '0.0000');
    await waitFor(async () => expect(addFundsBtn).not.toBeEnabled());
    userEvent.clear(addFundsInput);

    // invalid inputs: when user exceeds balance
    userEvent.type(addFundsInput, '3');
    await waitFor(async () => expect(addFundsBtn).not.toBeEnabled());
    userEvent.clear(addFundsInput);

    // valid inputs
    userEvent.type(addFundsInput, '2');
    await waitFor(async () => expect(addFundsBtn).toBeEnabled());
  });

  it('calculates "you will receive" correctly', async () => {
    expect.hasAssertions();

    const props = {
      userVTKBalance: 10,
      vaultBalanceOf: 2000,
      vaultSymbol: 'VLT1',
      vaultTotalSupply: 10000,
    };

    const { container, getByTestId } = render(
      wrapProvider(<Fund {...props} />, { balance: 2 }),
    );

    const addFundsInput = getByTestId('add-funds-input');
    const youWillReceived = container.querySelector('.you-will-receive').textContent;
    expect(youWillReceived).toBe('You will receive -- VLT1');

    await waitFor(() => {
      userEvent.type(addFundsInput, '1');
      const temp = container.querySelector('.you-will-receive').textContent;
      expect(temp).toBe('You will receive 950 VLT1');
    });

    await waitFor(() => {
      userEvent.clear(addFundsInput);
      userEvent.type(addFundsInput, '2');
      const temp = container.querySelector('.you-will-receive').textContent;
      expect(temp).toBe('You will receive 1,900 VLT1');
    });
  });
});


jest.mock('components/Basket/utils', () => ({
  addFunds: jest.fn(),
}));

jest.mock('common-util/functions', () => ({
  getBalance: jest.fn(),
}));

const setUserBalance = jest.fn(() => {});

describe('<Fund /> => Add funds functionality', () => {
  addFunds.mockImplementation(() => Promise.resolve());
  getBalance.mockImplementation(() => Promise.resolve(10));

  it('add funds function works as expected', async () => {
    expect.hasAssertions();

    const props = {
      userVTKBalance: 10,
      vaultBalanceOf: 2000,
      vaultSymbol: 'VLT1',
      vaultTotalSupply: 10000,
    };

    const { getByTestId } = render(
      wrapProvider(<Fund {...props} setUserBalance={setUserBalance} />, { balance: 2 }),
    );

    const addFundsInput = getByTestId('add-funds-input');
    const addFundsBtn = getByTestId('add-funds-button');

    // button will be disabled when there are no inputs
    expect(addFundsBtn).not.toBeEnabled();

    userEvent.type(addFundsInput, '1');
    await waitFor(async () => {
      expect(addFundsBtn).toBeEnabled();

      // click the "Add Funds" button
      userEvent.click(addFundsBtn);

      // function to be called only once
      expect(addFunds).toHaveBeenCalledTimes(1);

      // balance method to be called only once as well
      // expect(getBalance).toHaveBeenCalledTimes(1);
      expect(setUserBalance.mock.calls).toHaveLength(1);
    });

    /**
     * 1. input 2 ETH
     * 2. click on the button
     * 3. mock `addFunds` function
     * 4. re-render the component with props which will be after `addFunds`
     * 5. check the progress bar
     * 4. check the middle part of the progress
     */
  });
});
