import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';


export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args:{
    to:'/',
  }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'AppLink',
  theme: AppLinkTheme.PRIMARY
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'AppLink',
  theme: AppLinkTheme.INVERTED
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'AppLink',
  theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: 'AppLink',
  theme: AppLinkTheme.INVERTED
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)]