import Greetings from '@components/Main/Greetings'
import SettingsContext from '@store/Settings'
import { render, screen } from '@utils/test-utils'

describe('Greetings', () => {
  it('should have greetings text', () => {
    render(
      <SettingsContext.Provider
        value={{ data: { greetingsText: 'Sample greetings text' } }}
      >
        <Greetings />
      </SettingsContext.Provider>
    )
    expect(screen.getByText(/sample/i)).toBeInTheDocument()
  })

  it('should render greetings component', () => {
    render(
      <SettingsContext.Provider
        value={{ data: { greetingsText: 'Sample greetings text' } }}
      >
        <Greetings />
      </SettingsContext.Provider>
    )
    expect(screen.getByText(/sample/i)).toMatchSnapshot()
  })
})
