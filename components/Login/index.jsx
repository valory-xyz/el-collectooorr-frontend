import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Typography, Alert } from 'antd';
import Web3 from 'web3';
import get from 'lodash/get';
import { CONSTANTS } from 'util/constants';
import {
  setUserAccount as setUserAccountFn,
  setUserBalance as setUserBalanceFn,
  setErrorMessage as setErrorMessageFn,
} from 'store/setup/actions';
import { Container, DetailsContainer } from './styles';

const { Title } = Typography;

const Login = ({
  account,
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
        setUserBalance(Web3.utils.fromWei(b, 'ether'));
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

  if (!account) {
    return (
      <Container>
        <Button type="primary" onClick={handleLogin}>
          Connect MetaMask
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <DetailsContainer>
        {errorMessage ? (
          <Alert
            message={errorMessage}
            type="error"
            showIcon
            data-testid="login-error"
          />
        ) : (
          <Alert
            type="success"
            showIcon
            message={(
              <Title level={5} data-testid="metamask-address">
                Address:&nbsp;
                {account ? `${account}` : 'NA'}
              </Title>
            )}
          />
        )}
      </DetailsContainer>
    </Container>
  );
};

Login.propTypes = {
  account: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  errorMessage: PropTypes.string,
  setUserAccount: PropTypes.func.isRequired,
  setUserBalance: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

Login.defaultProps = {
  account: null,
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
