import type { Meta, StoryObj } from '@storybook/react';

import Toast from '../components/Toast';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Toast',
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SuccessDark: Story = {
  args: {
    title: "Success",
    type: "success",
    theme: "dark",
    message: "This is a toast message",
    actionText: "Close",
  },
};

export const SuccessWithIconDark: Story = {
    args: {
      title: "Success",
      type: "success",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
      iconName: "arrow-down",
    },
  };

export const ErrorDark: Story = {
    args: {
      title: "Error",
      type: "error",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
    },
};

export const ErrorWithIconDark: Story = {
    args: {
      title: "Error",
      type: "error",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
      iconName: "arrow-up",
    },
};

export const InformationDark: Story = {
    args: {
      title: "Information",
      type: "information",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
    },
};

export const InformationWithIconDark: Story = {
    args: {
      title: "Information",
      type: "information",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
      iconName: "arrow-back",
    },
};

export const NeutralDark: Story = {
    args: {
      title: "Neutral",
      type: "neutral",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
    },
};

export const NeutralWithIconDark: Story = {
    args: {
      title: "Neutral",
      type: "neutral",
      theme: "dark",
      message: "This is a toast message",
      actionText: "Close",
      iconName: "arrow-badge-down",
    },
};

export const SuccessLight: Story = {
    args: {
      title: "Success",
      type: "success",
      theme: "light",
      message: "This is a toast message",
      actionText: "Close",
    },
  };

export const SuccessWithIconLight: Story = {
    args: {
        title: "Success",
        type: "success",
        theme: "light",
        message: "This is a toast message",
        actionText: "Close",
        iconName: "arrow-bar-right",
        customIconTheme: "dark",
    },
};

export const ErrorLight: Story = {
    args: {
        title: "Error",
        type: "error",
        theme: "light",
        message: "This is a toast message",
        actionText: "Close",
    },
};

export const ErrorWithIconLight: Story = {
    args: {
        title: "Error",
        type: "error",
        theme: "light",
        message: "This is a toast message",
        actionText: "Close",
        iconName: "arrow-height" ,
        customIconTheme: "dark",
    },
};
  
export const InformationLight: Story = {
    args: {
        title: "Information",
        type: "information",
        theme: "light",
        message: "A new version of the app is available. Please update to access new features.",
        actionText: "Close",
    },
};
  
export const InformationWithIconLight: Story = {
    args: {
        title: "Information",
        type: "information",
        theme: "light",
        message: "A new version of the app is available. Please update to access new features.",
        actionText: "Close",
        iconName: "arrow-bear-left",
        customIconTheme: "dark",
    },
};

export const NeutralLight: Story = {
    args: {
        title: "Neutral",
        type: "neutral",
        theme: "light",
        message: "A new version of the app is available. Please update to access new features.",
        actionText: "Close",
    },
};

export const NeutralWithIconLight: Story = {
    args: {
        title: "Neutral",
        type: "neutral",
        theme: "light",
        message: "A new version of the app is available. Please update to access new features.",
        actionText: "Close",
        iconName: "arrow-bar-up",
        customIconTheme: "dark",
    },
};