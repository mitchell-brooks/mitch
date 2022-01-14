import Link from 'next/link';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavProps {
  home: {
    url: string;
    title: string;
    defaultContent: string;
    hoverContent: string;
  };
  navListItems: NavListItems;
}
interface LinkProps {
  title: string;
  url: string;
  external?: boolean;
}

interface NavListItem extends LinkProps {
  icon?: string | null;
}

interface NavListItems extends Array<NavListItem> {}

export interface HomeLinkProps {
  defaultContent: string;
  hoverContent: string;
}

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: var(--color-white-darker);
  border-bottom: 1px solid var(--color-white-darkest);
`;
const LinkOrA = ({ external = false, url, title, ...args }: LinkProps) =>
  external ? (
    <a href={url} {...args}>
      {title}
    </a>
  ) : (
    <Link href={url} {...args}>
      {title}
    </Link>
  );

const HomeLink = styled.span<HomeLinkProps>`
  & > a,
  & > Link {
    font-family: 'Verlag';
    font-weight: 900;
    color: var(--color-primary);
    text-decoration: none;
    padding-left: 8px;
    &:not(hover) {
      &::after {
        content: ${(props) => `"${props.defaultContent}"`};
      }
    }
    &:hover {
      &::after {
        color: var(--color-accent);
        content: ${(props) => `"${props.hoverContent}"`};
      }
    }
  }
`;

const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  padding-right: 20px;
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 0 10px;
  font-family: 'Verlag';
  font-weight: 900;
  & > a,
  & > Link {
    text-decoration: none;
    color: var(--color-primary);
    :hover {
      color: var(--color-accent);
    }
  }
`;

export function Nav({ home, navListItems }: NavProps) {
  const navItems = navListItems.map((item) => {
    return (
      <NavItem>
        <LinkOrA {...item} />
      </NavItem>
    );
  });
  return (
    <StyledNav>
      <HomeLink
        defaultContent={home.defaultContent}
        hoverContent={home.hoverContent}
      >
        <LinkOrA {...home} />
      </HomeLink>
      <NavItemsContainer>{navItems}</NavItemsContainer>
    </StyledNav>
  );
}

export default Nav;
