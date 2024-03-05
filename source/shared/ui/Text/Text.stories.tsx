import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';

import { Text, ThemeText } from './Text';


export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'text'
};

export const PrimaryWithTitle = Template.bind({});
PrimaryWithTitle.args = {
  title: 'Title',
};

export const PrimaryWithText = Template.bind({});
PrimaryWithText.args = {
  text: 'Title',
};

export const Error = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'text',
  theme: ThemeText.ERROR
};