import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByTestId } = render(<App />);
  const title = getByTestId('title');
  expect(title).toHaveTextContent('GitHub Jobs');
});
