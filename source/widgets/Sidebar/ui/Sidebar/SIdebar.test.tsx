import {fireEvent, screen} from '@testing-library/react';
import renderWithoutTtranslation from 'shared/lib/test/renderWithoutTtranslation/renderWithoutTtranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', ()=>{
  test('render Sidebar', () => {
    renderWithoutTtranslation(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });
  test('toggle Sidebar', () => {
    renderWithoutTtranslation(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toHaveClass('open')
    const tglBtn = screen.getByTestId('toggleBtn');
    fireEvent.click(tglBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('open')
  });
})