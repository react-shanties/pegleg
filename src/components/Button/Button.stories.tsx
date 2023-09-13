import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    // label generated from string children
    children: 'Click me',
  },
};

export const LabelOverride: Story = {
  args: {
    label: 'a different label',
    children: 'Click me',
  },
};

export const Submit: Story = {
  args: {
    type: 'submit',
    children: '',
  },
  render: ({ type }) => (
    <Button type={type}>
      I am a
      {' '}
      {type}
      {' '}
      button
    </Button>
  ),
};

export const ComplexChildren: Story = {
  args: {
    label: 'label is required',
    children: <span>Complex Children</span>,
  },
};
