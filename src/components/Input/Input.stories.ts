import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: '입력해주세요',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: '비활성화',
    disabled: true,
  },
};
