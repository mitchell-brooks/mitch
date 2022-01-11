import { Story, Meta } from '@storybook/react';
import { Nav, NavProps } from './nav';

export default {
  component: Nav,
  title: 'Nav',
} as Meta;

const Template: Story<NavProps> = (args) => {
  return (
    <div>
      <Nav {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
