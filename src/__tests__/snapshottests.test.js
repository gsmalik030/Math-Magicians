import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Snapshot for Calculator and Home', () => {
  it('Snapshot should match component render', () => {
    const homeview = render(<Home />);
    expect(homeview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const quoteview = render(<Quote />);
    expect(quoteview).toMatchSnapshot();
  });
});
