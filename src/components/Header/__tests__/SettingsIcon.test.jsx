import SettingsIcon from '@components/Header/SettingsIcon'
import { render, screen, vi, userEvent } from '@utils/test-utils'

describe('settings', () => {
  it('should render', () => {
    render(<SettingsIcon />)
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('should handle click', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(<SettingsIcon onClick={handleClick} />)
    const icon = screen.getByRole('img')
    await user.click(icon)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
