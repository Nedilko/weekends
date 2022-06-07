import HourDropdown from '@UI/Dropdown/HourDropdown'
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

describe('HourDropdown', () => {
  const handleChage = jest.fn()

  beforeEach(() => {
    handleChage.mockClear()
  })

  it('should render with Hours', () => {
    render(<HourDropdown onChange={handleChage} selectedValue={3} />)
    expect(screen.getByTestId('dropdown')).toMatchSnapshot()
  })

  it('should render with label Hour', () => {
    render(<HourDropdown onChange={handleChage} selectedValue={3} />)
    expect(screen.getByText('Hour')).toBeInTheDocument()
  })

  it('should render selected day value', () => {
    render(<HourDropdown onChange={handleChage} selectedValue={3} />)
    expect(screen.getByTestId('dropdown-selected-value')).toHaveTextContent(
      /03:00/i
    )
  })
})
