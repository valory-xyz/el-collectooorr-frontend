import styled from 'styled-components';
import { ServiceStatusInfo } from '@autonolas/frontend-library';
import { COLOR } from 'util/theme';

export const Div = styled.div`
  > .service-status-maximized {
    background-color: ${COLOR.BLACK};
  }
`;

const WidgetFooter = () => (
  <Div>
    <ServiceStatusInfo appType="mintkit" />
  </Div>
);

export default WidgetFooter;
