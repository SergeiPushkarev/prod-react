import ComponentRender from 'shared/lib/test/ComponentRender/ComponentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from "./Counter"
import { screen } from '@testing-library/react';

describe('Counter', ()=>{
  test('render Counter', () => {
    ComponentRender(<Counter/>, {initialState: {counter:{value:5}}});
    expect(screen.getByTestId('value-title')).toHaveTextContent('5')
  });
  test('increment', () => {
    ComponentRender(<Counter/>, {initialState: {counter:{value:1}}});
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('2')
  });
  test('decrement', () => {
    ComponentRender(<Counter/>, {initialState: {counter:{value:1}}});
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('2')
  });
})  