import { layoutProps } from '@mitchell-is/content';
import styled from 'styled-components';
import { Layout } from '@mitch/shared/ui';

/* eslint-disable-next-line */
export interface PageProps {
  title?: string;
  html: string;
}

const StyledPage = styled.div`
  color: pink;
`;

export function Page(props: PageProps) {
  return (
    <Layout {...layoutProps}>
      <StyledPage>
        {props.title && <h1>{props.title}</h1>}
        <section dangerouslySetInnerHTML={{ __html: props.html }}></section>
      </StyledPage>
    </Layout>
  );
}

export default Page;
