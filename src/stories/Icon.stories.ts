import type { Meta, StoryObj } from '@storybook/react';

import Icon from '../components/Icon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ArrowDownLight: Story = {
    args: {
        name: 'arrow-down',
        theme: 'light',
    },
};

export const ArrowDownDark: Story = {
    args: {
        name: 'arrow-down',
        theme: 'dark',
    },
};

export const ArrowLeftLight: Story = {
    args: {
        name: 'arrow-left',
        theme: 'light',
    },
};

export const ArrowLeftDark: Story = {
    args: {
        name: 'arrow-left',
        theme: 'dark',
    },
};

export const InvalidIcon: Story = {
    args: {
        name: 'invalid-icon',
    },
};
