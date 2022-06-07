import DropdownItemsList from '@UI/Dropdown/DropdownItemsList'
import { render, screen, userEvent } from '@utils/test-utils'

jest.mock('@UI/Dropdown/DropdownItem', () => {
  const originalModule = jest.requireActual('@UI/Dropdown/DropdownItem')
  return {
    __esModule: true,
    ...originalModule,
    default: ({ value, handleSelect }) => (
      <div data-testid="dropdown-item" onClick={() => handleSelect(value)}>
        {value}
      </div>
    ),
  }
})

describe('DropdownItemsList', () => {
  const selectHandler = jest.fn()

  beforeEach(() => {
    selectHandler.mockClear()
  })

  it('should render dropdown items list', () => {
    const selectedValue = 'second'
    const { container } = render(
      <DropdownItemsList
        items={['first']}
        handleSelect={selectHandler}
        selectedValue={selectedValue}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render 3 dropdown items', () => {
    const selectedValue = 'second'
    render(
      <DropdownItemsList
        items={['first', 'second', 'third']}
        handleSelect={selectHandler}
        selectedValue={selectedValue}
      />
    )
    expect(screen.getAllByTestId('dropdown-item')).toHaveLength(3)
  })

  it('should handle select', async () => {
    const selectedValue = 'second'
    const user = userEvent.setup()
    render(
      <DropdownItemsList
        items={['first', 'second', 'third']}
        handleSelect={selectHandler}
        selectedValue={selectedValue}
      />
    )
    await user.click(screen.getByText('third'))
    expect(selectHandler).toHaveBeenCalledTimes(1)
  })

  it('should handle select with dropdown item value', async () => {
    const selectedValue = 'second'
    const user = userEvent.setup()
    render(
      <DropdownItemsList
        items={['first', 'second', 'third']}
        handleSelect={selectHandler}
        selectedValue={selectedValue}
      />
    )
    await user.click(screen.getByText('third'))
    expect(selectHandler).toHaveBeenCalledWith('third')
  })
})
