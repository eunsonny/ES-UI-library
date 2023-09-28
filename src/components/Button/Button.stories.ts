import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    children: '버튼',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    primary: false, 
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    primary: true,
    children: '버튼',
    disabled: true,
  },
};


export const Large: Story = {
  args: {
    size: 'large',
    children: '버튼',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: '버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '버튼',
  },
};
