import Digitblock from '@components/Clock/Digitblock'
import { render, screen } from '@utils/test-utils'

describe('clock digit block renders', () => {
  beforeEach(() => {
    render(<Digitblock label="my label" digit={12} separator=":" />)
  })
  it('with label', () => {
    const label = screen.getByText(/my label/i)
    expect(label).toBeInTheDocument()
    expect(label).toMatchSnapshot()
  })
  it('with digit', () => {
    const digit = screen.getByText(/12/i)
    expect(digit).toBeInTheDocument()
    expect(digit).toMatchSnapshot()
  })
  it('with separator', () => {
    const separator = screen.getByText(/:/i)
    expect(separator).toBeInTheDocument()
    expect(separator).toMatchSnapshot()
  })
})
