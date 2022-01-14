import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BuildingProps {}

const StyledBuilding = styled.div`
  color: pink;
`;

export function Building(props: BuildingProps) {
  return (
    <StyledBuilding>
      <h1>Welcome to Building!</h1>
    </StyledBuilding>
  );
}

export default Building;
