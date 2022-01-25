import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import slugify from 'slugify';
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

export const getParsedFileContentByFilename = (
  filename: string,
  postsPath: string
): MarkdownDocument => {
  const postFilePath = join(postsPath, filename);
	const imagesPath = '_content/assets/images';
  const fileContents = fs.readFileSync(postFilePath);
  const { data, content } = matter(fileContents);
  let slug = data.slug ? data.slug : slugify(filename.replace(/\.[^/.]+$/, ''));
  let image = join(imagesPath, data.image);

  return {
    frontMatter: { ...data, image, slug },
    content,
  };
};

export const renderMarkdown = async (
  markdownContent: string
): Promise<string> => {
  return await markdownToHtml(markdownContent || '');
};
