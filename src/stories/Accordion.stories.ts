import type { Meta, StoryObj } from '@storybook/react';

import Accordion from '../components/Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ClosedPrimaryDark: Story = {
  args: {
    children: "Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",
    title: "Accordion Title",
    theme: "dark",
    isOpen: false,
  },
};

export const ClosedPrimaryLight: Story = {
  args: {
    children: "Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",
    title: "Accordion Title",
    theme: "light",
    isOpen: false,
  },
};

export const OpenPrimaryDark: Story = {
  args: {
    children: "Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",
    title: "Accordion Title",
    theme: "dark",
    isOpen: true,
  },
};

export const OpenPrimaryLight: Story = {
  args: {
    children: "Organize and reveal content effortlessly using Hawk's intuitive accordions. Streamline user experience by presenting information in collapsible sections, ensuring a clutter-free interface.",
    title: "Accordion Title",
    theme: "light",
    isOpen: true,
  },
};