import StartupModal from '@UI/Modals/StartupModal'
import { render, vi, screen, userEvent } from '@utils/test-utils'
import ReactDOM from 'react-dom'

describe('StartupModal', () => {
  const handleApply = vi.fn()

  const settings = {
    useSystemTheme: false,
    theme: 'light',
    greetingsText: 'sample greeting',
    day: 5,
    hour: 18,
    isFirstLoad: false,
  }

  beforeAll(() => {
    ReactDOM.createPortal = vi.fn((element) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  it('should be in the document', async () => {
    const { container } = render(
      <StartupModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should handle click on Apply button', async () => {
    const user = userEvent.setup()
    render(
      <StartupModal
        settings={settings}
        title="sample title"
        onApply={handleApply}
      />
    )
    const applyButton = screen.getByRole('button', { name: /apply/i })
    await user.click(applyButton)
    expect(handleApply).toBeCalledTimes(1)
  })
})
