import DayDropdown from '@UI/Dropdown/DayDropdown'
import { render, vi, userEvent } from '@utils/test-utils'
import { screen } from '@testing-library/react'

describe('button', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  it('should render closed', () => {
    const handleChage = vi.fn()
    const selectedValue = 3
    const { container } = render(
      <DayDropdown onChange={handleChage} selectedValue={selectedValue} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render with label Day', () => {
    const handleChage = vi.fn()
    const selectedValue = 3
    render(<DayDropdown onChange={handleChage} selectedValue={selectedValue} />)
    const label = screen.getByText('Day')
    expect(label).toBeInTheDocument()
  })

  it('should trigger on change handler', async () => {
    const handleChage = vi.fn()
    const selectedValue = 3
    const user = userEvent.setup()
    render(<DayDropdown onChange={handleChage} selectedValue={selectedValue} />)
    const dropdownElement = screen.getByRole('button')
    await user.click(dropdownElement)
    expect(handleChage).toBeCalledTimes(1)
    expect(handleChage).toBeCalledWith(3)
  })
})
