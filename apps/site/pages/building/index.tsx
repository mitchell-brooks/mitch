import styled from 'styled-components';
import { layoutProps } from '_content/_props';
import { Layout } from '@mitchell-is/shared/ui';
/* eslint-disable-next-line */
export interface BuildingProps {}

const StyledBuilding = styled.div`
  color: pink;
`;

export function Building(props: BuildingProps) {
  return (
    <Layout {...layoutProps}>
      <StyledBuilding>
        <h1>Welcome to Building!</h1>
      </StyledBuilding>
    </Layout>
  );
}

export default Building;
