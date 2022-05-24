import SettingsIcon from '@components/Header/SettingsIcon'
import { render, screen } from '@utils/test-utils'

describe('settings', () => {
  it('should render', () => {
    render(<SettingsIcon />)
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
})
