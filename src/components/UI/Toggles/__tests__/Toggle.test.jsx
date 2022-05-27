import Toggle from '@UI/Toggles/Toggle'
import { render, screen, userEvent } from '@utils/test-utils'

describe('toggle is', () => {
  const clickHandler = vi.fn()
  it('in the document', () => {
    render(<Toggle isChecked={true} onClick={clickHandler} />)
    const toggle = screen.getByRole('checkbox')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toMatchSnapshot()
  })
  it('clicked once', async () => {
    render(<Toggle isChecked={true} onClick={clickHandler} />)
    const user = userEvent.setup()
    const toggle = screen.getByRole('checkbox')
    await user.click(toggle)
    expect(clickHandler).toHaveBeenCalledTimes(1)
    expect(toggle).toMatchSnapshot()
  })
})
