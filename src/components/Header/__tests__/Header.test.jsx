import Header from '@components/Header/Header'
import SettingsContext from '@store/Settings'
import { render } from '@utils/test-utils'

describe('DarkModeSwitcher', () => {
  const handleApply = vi.fn()

  it('should be in the document', () => {
    const { container } = render(
      <SettingsContext.Provider
        value={{ data: { useSystemTheme: false, theme: 'light' }, handleApply }}
      >
        <Header />
      </SettingsContext.Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
