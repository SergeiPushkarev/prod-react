import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';

import { Modal } from 'shared/ui/Modal/Modal';


export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, officia minus? Natus similique nesciunt porro blanditiis sit? Expedita hic autem adipisci error nobis laudantium quo. Aliquam, ex? Accusantium, magnam sit.\n',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, officia minus? Natus similique nesciunt porro blanditiis sit? Expedita hic autem adipisci error nobis laudantium quo. Aliquam, ex? Accusantium, magnam sit.\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];