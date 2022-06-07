import DropdownItem from '@UI/Dropdown/DropdownItem'
import { render, screen, userEvent } from '@utils/test-utils'

describe('button', () => {
  const handleSelect = jest.fn()

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  beforeEach(() => {
    handleSelect.mockClear()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  afterAll(() => {
    window.HTMLElement.prototype.scrollIntoView.mockRestore()
  })

  it('should render dropdown item', () => {
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    expect(screen.getByTestId('dropdown-item')).toBeInTheDocument()
  })

  it('should render selected', () => {
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    expect(screen.getByTestId('dropdown-item')).toMatchSnapshot()
  })

  it('should render not selected', () => {
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={false}
      />
    )
    expect(screen.getByTestId('dropdown-item')).toMatchSnapshot()
  })

  it('should handle click', async () => {
    const user = userEvent.setup()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    await user.click(screen.getByTestId('dropdown-item'))
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })

  it('should pass value on click', async () => {
    const user = userEvent.setup()
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    await user.click(screen.getByTestId('dropdown-item'))
    expect(handleSelect).toHaveBeenCalledWith('sample')
  })

  it('should scroll into view on item render', () => {
    render(
      <DropdownItem
        value="sample"
        handleSelect={handleSelect}
        isSelected={true}
      />
    )
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
  })
})
