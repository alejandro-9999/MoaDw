import { render, screen } from '@testing-library/react';
import App from '.'

import { Provider } from "react-redux";
import generateStore from "./redux/store";


let store = generateStore();

let AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


test('renders learn react link', () => {
  render(
    <AppProvider/>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
