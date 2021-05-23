import { configure, render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


describe('App', ()=> {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  })
  test('renders learn react link', () => {
  });
})
