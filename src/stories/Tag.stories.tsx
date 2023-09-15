import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../components/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TagWithoutIconLight: Story = {
    args: {
        name: 'Visual',
        theme: 'light',
    },
};

export const TagWithIconLight: Story = {
    args: {
        name: 'Visual',
        theme: 'light',
        iconName: 'arrow-down',
    },
};

export const TagWithIconClosableLight: Story = {
    args: {
        name: 'Visual',
        theme: 'light',
        iconName: 'arrow-down',
        closable: true,
    },
};

export const TagWithoutIconDark: Story = {
    args: {
        name: 'Visual',
        theme: 'dark',
    },
};

export const TagWithIconDark: Story = {
    args: {
        name: 'Visual',
        theme: 'dark',
        iconName: 'arrow-down',
    },
};

export const TagWithIconClosableDark: Story = {
    args: {
        name: 'Visual',
        theme: 'dark',
        iconName: 'arrow-down',
        closable: true,
    },
};
