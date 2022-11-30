import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import {Provider} from 'react-redux'
import store from '../redux/createStore'
import reducer from '../redux/reducer';

const defaultState = {on: true}

test('redux state renders to page', () => {
  render(<Provider store={store}><App /></Provider>);
  const text = screen.getByText(/TRUE/i);
  expect(text).toBeInTheDocument();
});

test('redux state toggles', () => {
  render(<Provider store={store}><App /></Provider>);
  fireEvent.click(screen.getByText(/TRUE/i))
  expect(screen.getByText(/FALSE/i))
})

test('reducer returns default state when not defined', () => {
  expect(reducer(undefined, {type: 'TOGGLE', payload: true})).toEqual(defaultState)
})
