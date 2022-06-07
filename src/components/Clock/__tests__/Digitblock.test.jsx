import Digitblock from '@components/Clock/Digitblock'
import { render, screen } from '@utils/test-utils'

jest.mock('@components/Clock/Digit', () => {
  const originalModule = jest.requireActual('@components/Clock/Digit')
  return {
    __esModule: true,
    ...originalModule,
    default: () => <div data-testid="digit"></div>,
  }
})

jest.mock('@components/Clock/Separator', () => {
  const originalModule = jest.requireActual('@components/Clock/Separator')
  return {
    __esModule: true,
    ...originalModule,
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
