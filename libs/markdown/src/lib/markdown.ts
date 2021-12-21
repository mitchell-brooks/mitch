import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { markdownToHtml } from './markdown-to-html';
import { MarkdownDocument } from './types';

export function markdown(): string {
  return 'markdown';
}

export const getParsedFileContentBySlug = (
  slug: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);
  const { data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content,
  };
};

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || '');
};
