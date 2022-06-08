import SettingsIcon from '@components/Header/SettingsIcon'
import { render, screen, userEvent } from '@utils/test-utils'

describe('SettingsIcon', () => {
  const handleClick = jest.fn()
  beforeEach(() => {
    handleClick.mockClear()
  })

  it('should render', () => {
    render(<SettingsIcon />)
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('should handle click', async () => {
    const user = userEvent.setup()
    render(<SettingsIcon onClick={handleClick} />)
    const icon = screen.getByRole('img')
    await user.click(icon)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
