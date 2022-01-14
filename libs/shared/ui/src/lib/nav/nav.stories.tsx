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
Primary.args = {
  home: {
    title: 'Mitchell',
    defaultContent: ' Brooks',
    hoverContent: '.is',
    url: '/',
  },
  navListItems: [
    { title: 'Projects', url: '/building', external: false, icon: null },
    { title: 'About', url: '/me', external: false, icon: null },
  ],
};
