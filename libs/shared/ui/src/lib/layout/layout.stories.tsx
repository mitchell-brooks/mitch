import { Story, Meta } from '@storybook/react';
import { Layout, LayoutProps } from './layout';
import { layoutProps } from '_content/_props';

export default {
  component: Layout,
  title: 'Layout',
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...layoutProps };
