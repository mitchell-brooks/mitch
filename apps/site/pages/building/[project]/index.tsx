import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProjectProps {}

const StyledProject = styled.div`
  color: pink;
`;

export function Project(props: ProjectProps) {
  return (
    <StyledProject>
      <h1>Welcome to Project!</h1>
    </StyledProject>
  );
}

export default Project;
