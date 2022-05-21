import Greetings from '@components/Main/Greetings'
import SettingsContext from '@store/Settings'
import { render, screen } from '@utils/test-utils'

describe('greetings text', () => {
  it('is visible', () => {
    render(
      <SettingsContext.Provider value={{ data: { greetingsText: 'sample' } }}>
        <Greetings />
      </SettingsContext.Provider>
    )
    const title = screen.getByText(/sample/i)
    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
