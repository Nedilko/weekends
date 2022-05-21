import Button from '@UI/Buttons/Button'
import { render, screen, userEvent } from '@utils/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('button is', () => {
  const clickHandler = vi.fn()
  beforeEach(() => {
    render(<Button title="sample" onClick={clickHandler} />)
  })
  it('in the document', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('sample')
    expect(button).toMatchSnapshot()
  })
  it('clicked once', async () => {
    const user = userEvent.setup()
    const button = screen.getByRole('button')
    await user.click(button)
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
