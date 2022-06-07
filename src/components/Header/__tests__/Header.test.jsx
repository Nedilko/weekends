import Header from '@components/Header/Header'
import { render, screen } from '@utils/test-utils'

jest.mock('@components/Header/Settings', () => {
  const originalModule = jest.requireActual('@components/Header/Settings')
  return {
    __esModule: true,
    ...originalModule,
    default: () => {
      return <div>Settings</div>
    },
  }
})

jest.mock('@components/Header/DarkModeSwitcher', () => {
  const originalModule = jest.requireActual(
    '@components/Header/DarkModeSwitcher'
  )
  return {
    __esModule: true,
    ...originalModule,
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
