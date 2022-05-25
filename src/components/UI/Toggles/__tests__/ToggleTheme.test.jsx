import ToggleTheme from '@UI/Toggles/ToggleTheme'
import { render, screen, userEvent, vi } from '@utils/test-utils'

describe('theme toggle is', () => {
  const clickHandler = vi.fn()
  it('in the document', () => {
    render(<ToggleTheme isChecked={true} onClick={clickHandler} />)
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toMatchSnapshot()
  })
  it('clicked once', async () => {
    render(<ToggleTheme isChecked={true} onClick={clickHandler} />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('checkbox')
    await user.click(toggle)
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
