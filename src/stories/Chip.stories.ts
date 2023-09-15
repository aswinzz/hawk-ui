import type { Meta, StoryObj } from '@storybook/react';

import Chip from '../components/Chip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Chip',
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ChipLight: Story = {
    args: {
        name: 'This is a chip',
        theme: 'light',
    },
};

export const ChipDark: Story = {
    args: {
        name: 'This is a chip',
        theme: 'dark',
    },
};
