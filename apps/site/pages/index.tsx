import styled from 'styled-components';
import { Layout } from '@mitchell-is/shared/ui';
import { layoutProps } from '_content/_props';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <Layout {...layoutProps}>
      <StyledPage>
        <div className="wrapper">
          <div className="container">
            <div id="welcome">
              <h1>
                <span> mitchell.is </span>
              </h1>
            </div>
          </div>
        </div>
      </StyledPage>
    </Layout>
  );
}

export default Index;
