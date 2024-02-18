import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';

import { Input } from './Input';


export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Input',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  placeholder: 'Input',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
