import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Skeleton } from 'antd/lib';
import { SubHeaderSection } from '../Homepage/0Header';
import { Container } from './styles';

/**
 * Documentation component
 */
const Documentation = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <Container>
      <SubHeaderSection />
      Documentation
    </Container>
  );
};

export default Documentation;

// Documentation.propTypes = {
//   account: PropTypes.string,
//   balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// Documentation.defaultProps = {
//   account: null,
//   balance: null,
// };

// const mapStateToProps = (state) => {
//   const { account, balance } = state.setup;
//   return { account, balance };
// };

// export default connect(mapStateToProps, {})(Documentation);
