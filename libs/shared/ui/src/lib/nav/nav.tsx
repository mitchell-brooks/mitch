import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavProps {
  home: { url: string; title: string; hoverContent: string };
}

export interface HomeLinkProps {
  hoverContent: string;
}

const StyledNav = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--color-white-darker);
`;
const HomeLink = styled.a<HomeLinkProps>`
  font-family: 'Verlag Black';
  color: var(--color-primary);
  text-decoration: none;
  &:hover {
    &::after {
      color: var(--color-accent);
      content: ${(props) => `"${props.hoverContent}"`}
  }
`;

export function Nav({ home }: NavProps) {
  return (
    <StyledNav>
      <HomeLink hoverContent={home.hoverContent} href={home.url}>
        {home.title}
      </HomeLink>
    </StyledNav>
  );
}

export default Nav;
