import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
export const dummyAddress = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
export const emptyStore = mockStore({});

export const initStore = (otherValues) => mockStore({
  setup: {
    account: dummyAddress,
    ...otherValues,
  },
});

/**
 *
 * @param {Component} component valid react component
 * @param {Boolean} isEmptyStore should the store need to be empty?
 * @returns
 */
export const wrapProvider = (component, otherValues) => (
  <Provider store={otherValues ? initStore(otherValues) : emptyStore}>
    {component}
  </Provider>
);

export const errorStore = mockStore({
  setup: { account: dummyAddress, errorMessage: 'Error in store' },
});

export const wrapProviderError = (component) => (
  <Provider store={errorStore}>{component}</Provider>
);

export const dummyFunction = jest.fn(() => {});
