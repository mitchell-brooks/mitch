import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ApplicationProps extends ParsedUrlQuery {
  company: string;
  slug: string;
}

const StyledCompany = styled.div`
  color: pink;
`;

export function Application({ company, slug }: ApplicationProps) {
  return (
    <StyledCompany>
      <h1>Applying to {company}!</h1>
    </StyledCompany>
  );
}

export const getStaticProps: GetStaticProps<ApplicationProps> = async ({
  params,
}: {
  params: ApplicationProps;
}) => {
  const { company, slug } = params;
  return {
    props: {
      company,
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ApplicationProps> = async () => {
  return {
    paths: [
      {
        params: {
          company: 'Google',
          slug: 'google',
        },
      },
      {
        params: {
          company: 'ACME Co.',
          slug: 'acme-co',
        },
      },
      { params: { company: 'Caveat Emptorium', slug: 'caveat-emptorium' } },
    ],
    fallback: false,
  };
};
export default Application;
