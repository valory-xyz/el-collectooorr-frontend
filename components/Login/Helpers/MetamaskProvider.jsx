import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useWeb3React } from '@web3-react/core';
import { setLoaded as setLoadedFn } from 'store/setup/actions';
import { CONSTANTS } from 'util/constants';
import injected from '.';

/**
 * component to persist the metamask login on browser refresh
 */
function MetamaskProvider({ setLoaded, children }) {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();

  useEffect(() => {
    const isDisconnect = localStorage.getItem(CONSTANTS.DISCONNECT);
    console.log(1, { isDisconnect });
    if (isDisconnect !== 'true') {
      injected
        .isAuthorized()
        .then((hasAuthorized) => {
          setLoaded(true);
          console.log(2, { hasAuthorized });

          if (hasAuthorized && !networkActive && !networkError) {
            activateNetwork(injected);
            console.log(3, { injected });
          }
        })
        .catch(() => {
          setLoaded(false);
        });
    }

    console.log(4);
  }, [activateNetwork, networkActive, networkError]);

  return children;
}

MetamaskProvider.propTypes = {
  setLoaded: PropTypes.func,
};

MetamaskProvider.defaultProps = {
  setLoaded: () => {},
};

const mapStateToProps = () => ({});
const mapDispatchToProps = { setLoaded: setLoadedFn };

export default connect(mapStateToProps, mapDispatchToProps)(MetamaskProvider);
