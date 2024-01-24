import {fireEvent, screen} from '@testing-library/react';
import ComponentRender from 'shared/lib/test/ComponentRender/ComponentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', ()=>{
  test('render Sidebar', () => {
    ComponentRender(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });
  test('toggle Sidebar', () => {
    ComponentRender(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toHaveClass('open')
    const tglBtn = screen.getByTestId('toggleBtn');
    fireEvent.click(tglBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('open')
  });
})