import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ApplicationProps extends ParsedUrlQuery {
  company: string;
}

const StyledCompany = styled.div`
  color: pink;
`;

export function Application({ company }: ApplicationProps) {
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
  return {
    props: {
      company: params.company,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ApplicationProps> = async () => {
  return {
    paths: [
      {
        params: {
          company: 'Google',
          'company-slug': 'google',
        },
      },
      {
        params: {
          company: 'ACME Co.',
          'company-slug': 'google',
        },
      },
      { params: { company: 'Caveat Emptorium', 'company-slug': 'google' } },
    ],
    fallback: false,
  };
};
export default Application;
