import Digitblock from '@components/Clock/Digitblock'
import { render, screen } from '@utils/test-utils'

describe('clock digit block renders', () => {
  it('with label', () => {
    render(<Digitblock label="my label" digit={12} separator=":" />)
    const label = screen.getByText(/my label/i)
    expect(label).toBeInTheDocument()
    expect(label).toMatchSnapshot()
  })
  it('with digit', () => {
    render(<Digitblock label="my label" digit={12} separator=":" />)
    const digit = screen.getByText(/12/i)
    expect(digit).toBeInTheDocument()
    expect(digit).toMatchSnapshot()
  })
  it('with separator', () => {
    render(<Digitblock label="my label" digit={12} separator=":" />)
    const separator = screen.getByText(/:/i)
    expect(separator).toBeInTheDocument()
    expect(separator).toMatchSnapshot()
  })
})
