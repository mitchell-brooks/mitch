import { Story, Meta } from '@storybook/react';
import { navProps } from '_content/_props';
import {Nav, NavProps} from "./NavProps";

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
Primary.args = { ...navProps };
