import SettingsIcon from '@components/Header/SettingsIcon'
import { render, screen } from '../../utils/test-utils'

describe('settings icon is', () => {
  it('in the document', () => {
    render(<SettingsIcon />)
    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
})
