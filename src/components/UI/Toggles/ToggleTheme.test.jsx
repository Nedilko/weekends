import ToggleTheme from '@UI/Toggles/ToggleTheme'
import { render, screen, userEvent } from '@utils/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('theme toggle is', () => {
  const clickHandler = vi.fn()
  beforeEach(() => {
    render(<ToggleTheme isChecked={true} onClick={clickHandler} />)
  })
  it('in the document', () => {
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toMatchSnapshot()
  })
  it('clicked once', async () => {
    const user = userEvent.setup()
    const toggle = screen.getByRole('checkbox')
    await user.click(toggle)
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
