import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders app', () => {
  act(() => {
    render(<App />);
  })
});
