import { render } from '@testing-library/react';
import { getDirectoryContent } from 'apps/site/lib/content';

import Building, { BuildingProps } from './index';
const buildingProps: () => BuildingProps = () => {
  const directory = 'building';
  const contentArray = getDirectoryContent(directory);
  return { contentArray };
};

describe('Building', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Building {...buildingProps()} />);
    expect(baseElement).toBeTruthy();
  });
});
