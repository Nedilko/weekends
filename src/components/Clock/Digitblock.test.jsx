import Digitblock from '@components/Clock/Digitblock'
import { render, screen } from '@utils/test-utils'

describe('label and digit are in the document', () => {
  beforeEach(() => {
    render(<Digitblock label="my label" digit={12} />)
  })
  it('label is visible', () => {
    const label = screen.getByText(/my label/i)
    expect(label).toBeInTheDocument()
  })
  it('digit is visible', () => {
    const digit = screen.getByText(/12/i)
    expect(digit).toBeInTheDocument()
  })
})

describe('label, digit and separator are in the document', () => {
  beforeEach(() => {
    render(<Digitblock label="my label" digit={12} separator="--" />)
  })
  it('label is visible', () => {
    const label = screen.getByText(/my label/i)
    expect(label).toBeInTheDocument()
  })
  it('digit is visible', () => {
    const digit = screen.getByText(/12/i)
    expect(digit).toBeInTheDocument()
  })
  it('separator is visible', () => {
    const separator = screen.getByText(/--/i)
    expect(separator).toBeInTheDocument()
  })
})
