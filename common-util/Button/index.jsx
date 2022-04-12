import { Button } from 'antd/lib';
import PropTypes from 'prop-types';
import { COLOR } from 'util/theme';

export const commonStyle = {
  color: COLOR.WHITE,
  borderRadius: '20px',
  fontSize: '14px',
  padding: '6px 32px',
  textTransform: 'uppercase',
};

/**
 * @returns RedButton component
 */

const getStyle = (k) => {
  switch (k) {
    case 'red':
      return {
        borderColor: COLOR.RED,
        backgroundColor: COLOR.RED,
      };

    case 'blue':
      return {
        borderColor: COLOR.BLUE,
        backgroundColor: COLOR.BLUE,
      };

    case 'purple':
      return {
        borderColor: COLOR.PURPLE,
        backgroundColor: COLOR.PURPLE,
      };

    default:
      return {};
  }
};

export const CustomButton = ({ children, variant, ...rest }) => (
  <Button {...rest} style={{ ...commonStyle, ...getStyle(variant) }}>
    {children}
  </Button>
);

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variant: PropTypes.string,
};

CustomButton.defaultProps = {
  children: null,
  variant: null,
};

export default CustomButton;
