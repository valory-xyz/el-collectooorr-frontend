import styled from 'styled-components';
import {
  ServiceStatusInfo,
  COLOR as LIBRARY_COLOR,
} from '@autonolas/frontend-library';
import { COLOR } from 'util/theme';

export const Div = styled.div`
  > .service-status-maximized {
    background-color: ${COLOR.BLACK};
  }
  > .service-status-minimized {
    max-width: 80px;
    height: 52px;
    border: 1px solid ${LIBRARY_COLOR.GREY_4};
    border-radius: 8px;
  }
`;

const WidgetFooter = () => (
  <Div>
    <ServiceStatusInfo appType="mintkit" />
  </Div>
);

export default WidgetFooter;
