import Digitblock from '@components/Clock/Digitblock'
import { render, screen } from '@utils/test-utils'

vi.mock('@components/Clock/Digit', () => {
  return {
    default: () => <div data-testid="digit"></div>,
  }
})

vi.mock('@components/Clock/Separator', () => {
  return {
    default: () => <div data-testid="separator"></div>,
  }
})

describe('Digitblock', () => {
  it('should render with digit, label and separator', () => {
    const { container } = render(
      <Digitblock label="my label" digit={12} separator=":" />
    )
    const label = screen.getByText(/my label/i)
    const digit = screen.getByTestId('digit')
    const separator = screen.getByTestId('separator')
    expect(label).toBeInTheDocument()
    expect(digit).toBeInTheDocument()
    expect(separator).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
  it('should render without separator', () => {
    const { container } = render(<Digitblock label="my label" digit={12} />)
    const separator = screen.queryByTestId('separator')
    expect(separator).not.toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
