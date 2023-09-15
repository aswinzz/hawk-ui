import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryDark: Story = {
  args: {
    type: "primary",
    children: 'Button',
    theme: 'dark',
  },
};

export const SecondaryDark: Story = {
  args: {
    type: "secondary",
    children: 'Button',
    theme: 'dark',
  },
};

export const DestructiveDark: Story = {
  args: {
    type: "destructive",
    children: 'Button',
    theme: 'dark',
  },
};

export const PrimaryLight: Story = {
  args: {
    type: "primary",
    children: 'Button',
    theme: 'light',
  },
};

export const SecondaryLight: Story = {
  args: {
    type: "secondary",
    children: 'Button',
    theme: 'light',
  },
};

export const DestructiveLight: Story = {
  args: {
    type: "destructive",
    children: 'Button',
    theme: 'light',
  },
};
