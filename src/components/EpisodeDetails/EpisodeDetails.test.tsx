import { render } from '@testing-library/react';
import { EpisodeDetails } from './EpisodeDetails';

jest.mock('../StateHandler/StateHandler');

describe('EpisodeDetails', () => {

  it('should render the component', () => {
    const { getByTestId } = render(<EpisodeDetails />);
    expect(getByTestId('movie-info')).toBeVisible();
  });
})