import styled from 'styled-components';
import { layoutProps } from '@mitchell-is/content';
import { Layout } from '@mitch/shared/ui';
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
