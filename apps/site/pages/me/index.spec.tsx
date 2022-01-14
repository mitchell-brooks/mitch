import { render } from '@testing-library/react';

import Me from './index';

describe('Me', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Me />);
    expect(baseElement).toBeTruthy();
  });
});
