import DropdownItem from '@UI/Dropdown/DropdownItem'
import { render, screen, userEvent } from '@utils/test-utils'

describe('button', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  it('should render', () => {
    const handleSelect = vi.fn()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    const dropdownItem = screen.getByTestId('dropdown-item')
    expect(dropdownItem).toBeInTheDocument()
  })

  it('should render selected', () => {
    const handleSelect = vi.fn()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    const dropdownItem = screen.getByTestId('dropdown-item')
    expect(dropdownItem).toMatchSnapshot()
  })

  it('should render not selected', () => {
    const handleSelect = vi.fn()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={false}
      />
    )
    const dropdownItem = screen.getByTestId('dropdown-item')
    expect(dropdownItem).toMatchSnapshot()
  })

  it('should handle click', async () => {
    const handleSelect = vi.fn()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    const user = userEvent.setup()
    const dropdownItem = screen.getByTestId('dropdown-item')
    await user.click(dropdownItem)
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })

  it('should pass value on click', async () => {
    const handleSelect = vi.fn()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    const user = userEvent.setup()
    const dropdownItem = screen.getByTestId('dropdown-item')
    await user.click(dropdownItem)
    expect(handleSelect).toHaveBeenCalledWith('sample')
  })
})
