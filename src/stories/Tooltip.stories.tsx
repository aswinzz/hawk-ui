import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '../components/Tooltip';
import TooltipStyles from '../components/Tooltip/Tooltip.module.scss';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const withCustomViewport = (StoryComponent: React.FC) => {
    return (
        <>
        <div style={{ width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StoryComponent />
        </div>
        </>
    );
};

const withLargeCustomViewport = (StoryComponent: React.FC) => {
    return (
        <>
        <div style={{ width: '400px', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <StoryComponent />
        </div>
        </>
    );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TooltipUpLight: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
    },
};

export const TooltipUpDark: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
    },
};

export const TooltipBottomLight: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: "down",
    },
};

export const TooltipBottomDark: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: "down",
    },
};

export const TooltipLeftLight: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: "left",
    },
};

export const TooltipLeftDark: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: "left",
    },
};

export const TooltipRightLight: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: "right",
    },
};

export const TooltipRightDark: Story = {
    decorators: [withCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: "right",
    },
};


export const TooltipWithMediaLight: Story = {
    decorators: [withLargeCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: 'right',
    },
};

export const TooltipWithMediaDark: Story = {
    decorators: [withLargeCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: TooltipStyles.withFixedWidth,
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: 'right',
    },
};

export const TooltipWithCustomOrderLight: Story = {
    decorators: [withLargeCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: TooltipStyles.withFixedWidth,
        customOrdering: {
            media: 3,
            title: 1,
            content: 2,
        },
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: 'right',
    },
};

export const TooltipWithCustomOrderDark: Story = {
    decorators: [withLargeCustomViewport],
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: TooltipStyles.withFixedWidth,
        customOrdering: {
            media: 3,
            title: 1,
            content: 2,
        },
        children: <div style={{padding: 20}}>Hover on this for Tooltip</div>,
        position: 'right',
    },
};
