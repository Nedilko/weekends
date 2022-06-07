import Dropdown from '@UI/Dropdown/Dropdown'
import { render, screen, userEvent } from '@utils/test-utils'

describe('Dropdown', () => {
  const handleChage = jest.fn()

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  beforeEach(() => {
    handleChage.mockClear()
  })

  afterEach(() => {
    window.HTMLElement.prototype.scrollIntoView.mockClear()
  })

  afterAll(() => {
    window.HTMLElement.prototype.scrollIntoView.mockRestore()
  })

  it('should render closed', () => {
    render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    const dropdown = screen.getByText('sample label')
    expect(dropdown).toMatchSnapshot()
  })

  it('should render opened', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    await user.click(screen.getByRole('button'))
    expect(container).toMatchSnapshot()
  })

  it('should render closed on click outside', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    await user.click(screen.getByRole('button'))
    await user.click(document.body)
    expect(container).toMatchSnapshot()
  })

  it('should change selected value', async () => {
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    const dropdownElement = screen.getByRole('button')
    await user.click(dropdownElement)
    await user.click(screen.getByText('third'))
    expect(dropdownElement).toHaveTextContent('third')
  })

  it('should trigget onChange handler with appropriate value', async () => {
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    await user.click(screen.getByRole('button'))
    await user.click(screen.getByText('third'))
    expect(handleChage).toHaveBeenCalledTimes(1)
    expect(handleChage).toHaveBeenCalledWith('third')
  })

  it('should close dropdown on value select', async () => {
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    await user.click(screen.getByRole('button'))
    await user.click(screen.getByText('third'))
    screen
      .queryAllByTestId('dropdown-item')
      .forEach((item) => expect(item).not.toBeInTheDocument())
  })

  it('should rotate arrow when opened', async () => {
    const user = userEvent.setup()
    render(
      <Dropdown
        label="sample label"
        items={['first', 'second', 'third']}
        onChange={handleChage}
        value={'second'}
      />
    )
    const arrow = screen.getByRole('img')
    expect(arrow).toMatchSnapshot()
    await user.click(screen.getByRole('button'))
    expect(arrow).toMatchSnapshot()
  })
})
