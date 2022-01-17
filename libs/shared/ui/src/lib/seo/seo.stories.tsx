import { Story, Meta } from '@storybook/react';
import { seoProps } from '_content/_props';
import { SEO, SEOProps } from './seo';

export default {
  component: SEO,
  title: 'SEO',
} as Meta;

const Template: Story<SEOProps> = (args) => <SEO {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...seoProps };
