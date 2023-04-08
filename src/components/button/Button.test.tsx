import { expect } from '@storybook/jest'
import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import * as stories from './Button.stories'

const { Default } = composeStories(stories)

describe('Button.test component', () => {
  it('renders with play function', async () => {
    render(<Default />)
    const buttonElement = screen.getByRole('button', { name: 'Default' })
    await userEvent.click(buttonElement)
    await expect(buttonElement).toBeInTheDocument()
  })
})
