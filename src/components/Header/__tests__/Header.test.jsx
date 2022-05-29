import Header from '@components/Header/Header'
import { render, screen } from '@utils/test-utils'

describe('DarkModeSwitcher', () => {
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

  it('should be in the document', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toMatchSnapshot()
  })
})
