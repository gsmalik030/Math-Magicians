import { render } from '@testing-library/react';
import Home from '../components/home';
import Quote from '../components/quote';
import Navbar from '../components/navbar';
import Calculator from '../components/Calculator';

describe('Snapshot for Calculator and Home', () => {
  it('Snapshot should match component render', () => {
    const homeview = render(<Home />);
    expect(homeview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const quoteview = render(<Quote />);
    expect(quoteview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const navview = render(<Navbar />);
    expect(navview).toMatchSnapshot();
  });
  it('Snapshot should match component render', () => {
    const calcview = render(<Calculator />);
    expect(calcview).toMatchSnapshot();
  });
});
