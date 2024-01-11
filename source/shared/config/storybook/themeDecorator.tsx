import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComp: Story)=> (
  <div className={`app ${theme}`}>
    <StoryComp/>
  </div>
)