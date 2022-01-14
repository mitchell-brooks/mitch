import { Story, Meta } from '@storybook/react';
import { SEO } from './seo';

export default {
  component: SEO,
  title: 'SEO',
} as Meta;

const Template: Story = (args) => <SEO {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
