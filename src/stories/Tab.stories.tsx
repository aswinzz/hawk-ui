import type { Meta, StoryObj } from '@storybook/react';

import Tab from '../components/Tab';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Tab',
  component: Tab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TabWithoutIconLight: Story = {
    args: {
        name: 'Animation',
        theme: 'light',
    },
};

export const TabWithIconLight: Story = {
    args: {
        name: 'Animation',
        theme: 'light',
        iconName: 'sparkles',
    },
};

export const TabWithIconSelectedLight: Story = {
    args: {
        name: 'Animation',
        theme: 'light',
        iconName: 'sparkles',
        isSelected: true,
    },
};

export const TabWithIconCountLight: Story = {
    args: {
        name: 'Animation',
        theme: 'light',
        iconName: 'sparkles',
        isSelected: true,
        count: '5',
    },
};

export const TabWithoutIconDark: Story = {
    args: {
        name: 'Animation',
        theme: 'dark',
    },
};

export const TabWithIconDark: Story = {
    args: {
        name: 'Animation',
        theme: 'dark',
        iconName: 'sparkles',
    },
};

export const TabWithIconSelectedDark: Story = {
    args: {
        name: 'Animation',
        theme: 'dark',
        iconName: 'sparkles',
        isSelected: true,
    },
};

export const TabWithIconCountDark: Story = {
    args: {
        name: 'Animation',
        theme: 'dark',
        iconName: 'sparkles',
        isSelected: true,
        count: '5',
    },
};

