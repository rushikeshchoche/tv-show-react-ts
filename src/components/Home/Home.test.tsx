import { act, fireEvent, render } from '@testing-library/react';
import { Home } from './Home';

jest.mock('../Card/Card');
jest.mock('../Featured/Featured');

describe('Home', () => {


  it('should render the component', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home')).toBeVisible();
  });

  it('should display search button', () => {
    const { getByTestId } = render(<Home />);
    const searchInput = getByTestId('search-input');
    act(() => {
      fireEvent.change(searchInput, { target: { value: 'states' } });
      expect(searchInput).toBeVisible();
      expect(getByTestId('search-icon')).toBeVisible();
    })
  });
})