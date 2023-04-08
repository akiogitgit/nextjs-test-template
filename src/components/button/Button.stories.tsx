import { linkTo } from '@storybook/addon-links'
import { jest } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Buttonですよ', // titleがオプショナルになった
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
}

// Storybookでストーリーをグループ化する. ストーリーを作成するために必要
export default meta

// Storyの型
type Story = StoryObj<typeof meta>

export const Default: Story & { args: ComponentProps<typeof Button> } = {
  args: {
    children: 'Default',
    color: 'default',
    size: 'md',
    // onClick: () => console.log('clickしました'),
    onClick: jest.fn(),
  },
  // ストーリーのオプション。
  parameters: {
    // ストーリーの背景を設定
    backgrounds: {
      values: [
        { name: 'red', value: 'red' },
        { name: 'green', value: 'green' },
        { name: 'blue', value: 'blue' },
      ],
    },
    layout: 'centerd', // 中央寄せ
  },
  // コンポーネントを囲うことも出来る
  decorators: [
    Story => (
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const HelloButton: Story = {
  args: { ...Default.args, children: 'Hello button !', color: 'default' },
}

export const Primary: Story = {
  args: { ...Default.args, children: 'Primary', color: 'primary' },
}

export const Danger: Story = {
  args: { ...Default.args, children: 'Danger', color: 'danger' },
}

export const Small: Story = {
  args: {
    // ...Default.args,
    children: 'Small',
    size: 'sm',
  },
}

export const Big: Story = {
  args: {
    // ...Default.args,
    children: 'Big',
    size: 'lg',
    onClick: linkTo('Buttonですよ', 'Default'),
  },
}
