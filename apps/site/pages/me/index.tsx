import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MeProps {}

const StyledMe = styled.div`
  color: pink;
`;

export function Me(props: MeProps) {
  return (
    <StyledMe>
      <h1>Welcome to Me!</h1>
    </StyledMe>
  );
}

export default Me;
