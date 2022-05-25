import Dropdown from '@UI/Dropdown/Dropdown'
import { render, screen, vi, userEvent } from '@utils/test-utils'

describe('dropdown', () => {
  const items = ['first', 'second', 'third']
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  it('should render closed', () => {
    const handleChage = vi.fn()
    const value = 'second'
    render(
      <Dropdown
        label="sample label"
        items={items}
        onChange={handleChage}
        value={value}
      />
    )
    const dropdown = screen.getByText('sample label')
    expect(dropdown).toMatchSnapshot()
  })

  it('should render opened', async () => {
    const handleChage = vi.fn()
    const value = 'second'
    const user = userEvent.setup()
    const { container } = render(
      <Dropdown
        label="sample label"
        items={items}
        onChange={handleChage}
        value={value}
      />
    )
    const dropdownElement = screen.getByRole('button')
    await user.click(dropdownElement)
    expect(container).toMatchSnapshot()
  })

  it('should render closed on click outside', async () => {
    const handleChage = vi.fn()
    const value = 'second'
    const user = userEvent.setup()
    const { container } = render(
      <Dropdown
        label="sample label"
        items={items}
        onChange={handleChage}
        value={value}
      />
    )
    await user.click(document.body)
    expect(container).toMatchSnapshot()
  })

  it('should change selected value', async () => {
    const handleChage = vi.fn()
    const value = 'second'
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={items}
        onChange={handleChage}
        value={value}
      />
    )
    const dropdownElement = screen.getByRole('button')
    await user.click(dropdownElement)
    const dropdownItem = screen.getByText('third')
    await user.click(dropdownItem)
    expect(dropdownElement).toHaveTextContent('third')
  })

  it('should close dropdown on value select', async () => {
    const handleChage = vi.fn()
    const value = 'second'
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={items}
        onChange={handleChage}
        value={value}
      />
    )
    await user.click(screen.getByRole('button'))
    const dropdownItemsList = screen.queryAllByTestId('dropdown-item')
    await user.click(screen.getByText('third'))
    dropdownItemsList.forEach((item) => expect(item).not.toBeInTheDocument())
  })

  it('should rotate arrow when opened', async () => {
    const handleChage = vi.fn()
    const value = 'second'
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={items}
        onChange={handleChage}
        value={value}
      />
    )
    const arrow = screen.getByRole('img')
    expect(arrow).toMatchSnapshot()
    await user.click(screen.getByRole('button'))
    expect(arrow).toMatchSnapshot()
  })
})
