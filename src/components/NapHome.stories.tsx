import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NapHome } from './NapHome';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/NapHome',
  component: NapHome,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NapHome>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NapHome> = (args) => <NapHome {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'Home',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Home',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Home',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Home',
};