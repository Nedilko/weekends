import Greetings from '@components/Main/Greetings'
import { render, screen } from '@utils/test-utils'

describe('Greetings', () => {
  it('should have greetings text', () => {
    render(<Greetings text="sample text" />)
    expect(screen.getByText(/sample/i)).toBeInTheDocument()
  })

  it('should render greetings component', () => {
    render(<Greetings text="sample text" />)
    expect(screen.getByText(/sample/i)).toMatchSnapshot()
  })
})
