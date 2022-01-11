import { MDXRemote } from 'next-mdx-remote';
import { readdirSync } from 'fs';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import styled from 'styled-components';
import {
  getParsedFileContentBySlug,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@mitchell-is/markdown';

/* eslint-disable-next-line */
export interface ApplicationProps extends ParsedUrlQuery {
  slug: string;
}

const StyledCompany = styled.div`
  color: pink;
`;

const POSTS_PATH = join(process.cwd(), '_content/applying');

export function Application({ frontMatter, html }) {
  const { company } = frontMatter;
  return (
    <StyledCompany>
      <h1>Applying to {company}!</h1>
      <hr />
      <MDXRemote {...html} />
    </StyledCompany>
  );
}

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: ApplicationProps;
}) => {
  const { company, slug } = params;
  const { content, frontMatter } = getParsedFileContentBySlug(slug, POSTS_PATH);
  const renderedHTML = await renderMarkdown(content);
  return {
    props: {
      frontMatter: frontMatter,
      html: renderedHTML,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ApplicationProps> = async () => {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
export default Application;
