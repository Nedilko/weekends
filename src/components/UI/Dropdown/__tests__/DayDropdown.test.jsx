import DayDropdown from '@UI/Dropdown/DayDropdown'
import { render } from '@utils/test-utils'
import { screen } from '@testing-library/react'

jest.mock('@UI/Dropdown/Dropdown', () => {
  const originalModule = jest.requireActual('@UI/Dropdown/Dropdown')
  return {
    __esModule: true,
    ...originalModule,
    default: ({ value, items, label }) => (
      <div data-testid="dropdown">
        <div>{label}</div>
        <div data-testid="dropdown-selected-value">{value}</div>
        <div>{items.join(', ')}</div>
      </div>
    ),
  }
})

describe('DayDropdown', () => {
  const handleChage = jest.fn()

  beforeEach(() => {
    handleChage.mockClear()
  })

  it('should render with Days', () => {
    render(<DayDropdown onChange={handleChage} selectedValue={3} />)
    expect(screen.getByTestId('dropdown')).toMatchSnapshot()
  })

  it('should render with label Day', () => {
    render(<DayDropdown onChange={handleChage} selectedValue={3} />)
    expect(screen.getByText('Day')).toBeInTheDocument()
  })

  it('should render selected day value', () => {
    render(<DayDropdown onChange={handleChage} selectedValue={3} />)
    expect(screen.getByTestId('dropdown-selected-value')).toHaveTextContent(
      /wednesday/i
    )
  })
})
