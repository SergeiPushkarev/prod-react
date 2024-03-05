import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { NavBar } from './NavBar';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator';

export default {
  title: 'widgets/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators=[StoreDecorator({user:{authData:undefined}})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators=[ThemeDecorator(Theme.DARK),StoreDecorator({user:{authData:undefined}})]

export const WithAuth = Template.bind({});
WithAuth.args = {};
WithAuth.decorators=[StoreDecorator({user:{authData:{id:'1', username:'story'}}})]