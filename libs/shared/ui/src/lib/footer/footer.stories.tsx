import { Story, Meta } from '@storybook/react';
import { footerProps } from '_content/_props';
import { Footer, FooterProps } from './footer';

export default {
  component: Footer,
  title: 'Footer',
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...footerProps };
