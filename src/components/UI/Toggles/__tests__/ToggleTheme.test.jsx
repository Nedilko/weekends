import ToggleTheme from '@UI/Toggles/ToggleTheme'
import { render, screen, userEvent } from '@utils/test-utils'

describe('ToggleTheme', () => {
  const clickHandler = vi.fn()

  beforeEach(() => {
    clickHandler.mockClear()
  })

  it('should render checked', () => {
    const { conainer } = render(
      <ToggleTheme isChecked={true} onClick={clickHandler} />
    )
    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(conainer).toMatchSnapshot()
  })

  it('should render unchecked', () => {
    const { conainer } = render(
      <ToggleTheme isChecked={false} onClick={clickHandler} />
    )
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(conainer).toMatchSnapshot()
  })

  it('should handle click', async () => {
    const user = userEvent.setup()
    render(<ToggleTheme isChecked={true} onClick={clickHandler} />)
    await user.click(screen.getByRole('checkbox'))
    expect(clickHandler).toHaveBeenCalledOnce()
  })
})
