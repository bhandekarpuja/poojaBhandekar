import React from 'react';
import Calender from './Calender';
import { render, screen } from '@testing-library/react';

test('render calender component  month name: ', () => {
 const { container } = render(<Calender date="2023-03-12" />);
  const monthName = screen.getByText(/March 2023/i);
  expect(monthName).toBeInTheDocument();
  expect(container.getElementsByClassName('weekDay').length).toBe(7);
});
test('render calender component week day list ', () => {
    const { container } = render(<Calender date="2023-03-12" />);
     expect(container.getElementsByClassName('weekDay').length).toBe(7);
   });
test('render calender component  days list ', () => {
    const { container } = render(<Calender date="2023-03-12" />);
     expect(container.getElementsByClassName('day').length).toBe(31);
   });

