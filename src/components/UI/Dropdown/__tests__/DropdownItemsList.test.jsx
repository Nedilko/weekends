import DropdownItemsList from '@UI/Dropdown/DropdownItemsList'
import { render, screen, vi, userEvent } from '@utils/test-utils'

describe('button', () => {
  const items = ['first', 'second', 'third']
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  it('should render 3 dropdown items', () => {
    const handleSelect = vi.fn()
    const selectedValue = 'second'
    render(
      <DropdownItemsList
        items={items}
        handleSelect={handleSelect}
        selectedValue={selectedValue}
      />
    )
    const dropdownItemsList = screen.getAllByTestId('dropdown-item')
    expect(dropdownItemsList).toHaveLength(3)
    expect(dropdownItemsList).toMatchSnapshot()
  })

  it('should handle select', async () => {
    const handleSelect = vi.fn()
    const selectedValue = 'second'
    render(
      <DropdownItemsList
        items={items}
        handleSelect={handleSelect}
        selectedValue={selectedValue}
      />
    )
    const user = userEvent.setup()
    const dropdownItem = screen.getByText('third')
    await user.click(dropdownItem)
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('third')
  })
})
