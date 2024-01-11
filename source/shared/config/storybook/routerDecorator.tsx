import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (NavbarComp: Story)=> (
  <BrowserRouter>
    <NavbarComp/>
  </BrowserRouter>
)