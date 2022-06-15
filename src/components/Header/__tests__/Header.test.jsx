import Header from '@components/Header/Header'
import { render, screen } from '@utils/test-utils'

vi.mock('@components/Header/Settings', () => {
  return {
    default: () => {
      return <div>Settings</div>
    },
  }
})

vi.mock('@components/Header/DarkModeSwitcher', () => {
  return {
    default: () => {
      return <div>Switcher</div>
    },
  }
})

describe('Header', () => {
  it('should render setting icon and theme switcher', () => {
    render(<Header />)
    expect(screen.getByText(/settings/i)).toBeInTheDocument()
    expect(screen.getByText(/switcher/i)).toBeInTheDocument()
  })

  it('should render header component', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toMatchSnapshot()
  })
})
