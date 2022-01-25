import {
  getParsedFileContentByFilename,
  getParsedFileContentBySlug,
  MarkdownDocument,
} from '@mitchell-is/markdown';
import fs from 'fs';
import path from 'path';
// const pathToContent = require.resolve('@mitchell-is/content');
const pathToContent = '_content';

export function getDirectoryContent(directory: string): MarkdownDocument[] {
  const fullPath = path.join(pathToContent, directory);
  const fileNames = fs.readdirSync(fullPath);
  const directoryContent = fileNames.map((filename) => {
    return getParsedFileContentByFilename(filename, fullPath);
  });

  // Read markdown file as string
  return directoryContent;
}
