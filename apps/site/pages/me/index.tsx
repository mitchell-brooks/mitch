import styled from 'styled-components';
import { layoutProps } from '_content/_props';
import { Layout } from '@mitchell-is/shared/ui';
/* eslint-disable-next-line */
export interface MeProps {}

const StyledMe = styled.div`
  color: pink;
`;

export function Me(props: MeProps) {
  return (
    <Layout {...layoutProps}>
      <StyledMe>
        <h1>Welcome to Me!</h1>
      </StyledMe>
    </Layout>
  );
}

export default Me;
