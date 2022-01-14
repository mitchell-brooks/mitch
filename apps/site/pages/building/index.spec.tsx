import { render } from '@testing-library/react';

import Building from './index';

describe('Building', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Building />);
    expect(baseElement).toBeTruthy();
  });
});
