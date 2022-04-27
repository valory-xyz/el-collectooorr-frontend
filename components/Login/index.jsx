import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Web3 from 'web3';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import round from 'lodash/round';
import { CONSTANTS } from 'util/constants';
import { CustomButton } from 'common-util/Button';
import {
  setUserAccount as setUserAccountFn,
  setUserBalance as setUserBalanceFn,
  setErrorMessage as setErrorMessageFn,
} from 'store/setup/actions';
import { Container, DetailsContainer, MetamaskContainer } from './styles';

const Login = ({
  account,
  balance,
  errorMessage,
  setUserAccount,
  setUserBalance,
  setErrorMessage,
}) => {
  const getBalance = (accoundPassed) => {
    window.ethereum
      .request({
        method: CONSTANTS.ETH_GETBALANCE,
        params: [accoundPassed, 'latest'],
      })
      .then((b) => {
        const balanceInEther = Web3.utils.fromWei(b, 'ether');
        setUserBalance(round(balanceInEther, 2));
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
  };

  const handleLogin = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: CONSTANTS.ETH_REQUESTACCOUNTS })
        .then((result) => {
          // setting only the 1st account
          setUserAccount(result[0]);
          getBalance(result[0]);
        })
        .catch((e) => {
          setErrorMessage(e.message);
        });
    } else {
      setErrorMessage('Please install MetaMask browser extension');
    }
  };

  /**
   * listener for account, chain changes
   */
  const handleAccountChange = (newAccount) => {
    setUserAccount(newAccount);
    getBalance(newAccount.toString());
  };

  // reload the page to on chain change to avoid errors
  const handleChainChange = () => {
    window.location.reload();
  };

  if (typeof window !== 'undefined' && window.ethereum) {
    window.ethereum.on('accountsChanged', handleAccountChange);
    window.ethereum.on('chainChanged', handleChainChange);
  }

  if (errorMessage) {
    return (
      <Container>
        <MetamaskContainer data-testid="login-error">
          {errorMessage}
        </MetamaskContainer>
      </Container>
    );
  }

  if (!account) {
    return (
      <Container>
        <CustomButton variant="green" onClick={handleLogin}>
          Connect MetaMask
        </CustomButton>
      </Container>
    );
  }

  return (
    <Container>
      <DetailsContainer>
        <MetamaskContainer>
          <div>{isNil(balance) ? 'NA' : `${balance} ETH`}</div>
          <div className="dash" />
          <div className="address">{account ? `${account}` : 'NA'}</div>
        </MetamaskContainer>
      </DetailsContainer>
    </Container>
  );
};

Login.propTypes = {
  account: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  balance: PropTypes.number,
  errorMessage: PropTypes.string,
  setUserAccount: PropTypes.func.isRequired,
  setUserBalance: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

Login.defaultProps = {
  account: null,
  balance: null,
  errorMessage: null,
};

const mapStateToProps = (state) => {
  const { account, balance, errorMessage } = get(state, 'setup', {});
  return { account, balance, errorMessage };
};

const mapDispatchToProps = {
  setUserAccount: setUserAccountFn,
  setUserBalance: setUserBalanceFn,
  setErrorMessage: setErrorMessageFn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
