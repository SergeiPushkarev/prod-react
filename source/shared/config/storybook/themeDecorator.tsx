import { Story } from "@storybook/react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComp: Story)=> (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComp/>
    </div>
  </ThemeProvider>
)