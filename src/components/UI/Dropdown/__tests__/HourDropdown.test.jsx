import HourDropdown from '@UI/Dropdown/HourDropdown'
import { render, vi, userEvent } from '@utils/test-utils'
import { screen } from '@testing-library/react'

describe('HourDropdown', () => {
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
      <HourDropdown onChange={handleChage} selectedValue={selectedValue} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render with label Day', () => {
    const handleChage = vi.fn()
    const selectedValue = 3
    render(
      <HourDropdown onChange={handleChage} selectedValue={selectedValue} />
    )
    const label = screen.getByText('Hour')
    expect(label).toBeInTheDocument()
  })

  it('should trigger on change handler', async () => {
    const handleChage = vi.fn()
    const selectedValue = 3
    const user = userEvent.setup()
    render(
      <HourDropdown onChange={handleChage} selectedValue={selectedValue} />
    )
    const dropdownElement = screen.getByRole('button')
    await user.click(dropdownElement)
    await user.click(screen.getByText('18:00'))
    expect(handleChage).toBeCalledTimes(1)
    expect(handleChage).toBeCalledWith(18)
  })
})
