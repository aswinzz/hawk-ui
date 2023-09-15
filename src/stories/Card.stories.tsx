import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';
import CardStyles from '../components/Card/Card.module.scss';
import Button from '../components/Button';
import Tag from '../components/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardWithoutButtonLight: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        type: 'horizontal',
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithoutButtonDark: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        type: 'horizontal',
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithButtonLight: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        type: 'horizontal',
        button: <Button theme="light" type="primary">Button</Button>,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithButtonDark: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        type: 'horizontal',
        button: <Button theme="dark" type="primary">Button</Button>,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithTagLight: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        type: 'horizontal',
        button: <Button theme="light" type="primary">Button</Button>,
        tag: <Tag name='New Release' theme= 'light' iconName='sparkles' />,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithTagDark: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        type: 'horizontal',
        button: <Button theme="dark" type="primary">Button</Button>,
        tag: <Tag name='New Release' theme= 'dark' iconName='sparkles' />,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithMediaLight: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        type: 'horizontal',
        button: <Button theme="light" type="primary">Button</Button>,
        tag: <Tag name='New Release' theme= 'light' iconName='sparkles' />,
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithMediaDark: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        type: 'horizontal',
        button: <Button theme="dark" type="primary">Button</Button>,
        tag: <Tag name='New Release' theme= 'dark' iconName='sparkles' />,
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithCustomOrderLight: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'light',
        type: 'horizontal',
        button: <Button theme="light" type="primary">Button</Button>,
        tag: <Tag name='New Release' theme= 'light' iconName='sparkles' />,
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: CardStyles.withFixedWidth,
        customOrdering: {
            media: 1,
            tag: 2,
            title: 3,
            content: 4,
            button: 5,
        },
    },
};

export const CardWithCustomOrderDark: Story = {
    args: {
        title: 'Natures fierce and agile aerial predator.',
        content: 'The hawks elegant flight and commanding presence make it a symbol of power and clarity.',
        theme: 'dark',
        type: 'horizontal',
        button: <Button theme="dark" type="primary">Button</Button>,
        tag: <Tag name='New Release' theme= 'dark' iconName='sparkles' />,
        media: <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="sample" />,
        customClassName: CardStyles.withFixedWidth,
        customOrdering: {
            media: 1,
            tag: 2,
            title: 3,
            content: 4,
            button: 5,
        },
    },
};


export const CardWithCustomContentLight: Story = {
    args: {
        theme: 'light',
        type: 'horizontal',
        children: <div><div style={{fontSize: 20}}>Title of Card</div><br/><div style={{fontSize: 16}}>This is a card with custom content</div></div>,
        customClassName: CardStyles.withFixedWidth,
    },
};

export const CardWithCustomContentDark: Story = {
    args: {
        theme: 'dark',
        type: 'horizontal',
        children: <div><div style={{fontSize: 20}}>Title of Card</div><br/><div style={{fontSize: 16}}>This is a card with custom content</div></div>,
        customClassName: CardStyles.withFixedWidth,
    },
};
