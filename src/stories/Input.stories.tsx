import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InputLight: Story = {
    args: {
        type: 'text',
        theme: 'light',
        placeholder: 'Enter something',
    },
};

export const InputDark: Story = {
    args: {
        type: 'text',
        theme: 'dark',
        placeholder: 'Enter something',
    },
};

export const InputSuccessLight: Story = {
    args: {
        type: 'text',
        theme: 'light',
        status: 'success',
        placeholder: 'Enter something',
    },
};

export const InputSuccessDark: Story = {
    args: {
        type: 'text',
        theme: 'dark',
        status: 'success',
        placeholder: 'Enter something',
    },
};

export const InputFailureLight: Story = {
    args: {
        type: 'text',
        theme: 'light',
        status: 'failure',
        placeholder: 'Enter something',
    },
};

export const InputFailureDark: Story = {
    args: {
        type: 'text',
        theme: 'dark',
        status: 'failure',
        placeholder: 'Enter something',
    },
};

export const InputDisabledLight: Story = {
    args: {
        type: 'text',
        theme: 'light',
        disabled: true,
        placeholder: 'Enter something',
    },
};

export const InputDisabledDark: Story = {
    args: {
        type: 'text',
        theme: 'dark',
        disabled: true,
        placeholder: 'Enter something',
    },
};

export const InputPasswordLight: Story = {
    args: {
        type: 'password',
        theme: 'light',
        placeholder: 'Enter something',
    },
};

export const InputPasswordDark: Story = {
    args: {
        type: 'password',
        theme: 'dark',
        placeholder: 'Enter something',
    },
};
