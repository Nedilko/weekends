import Button from '@UI/Buttons/Button'
import { render, screen, userEvent } from '@utils/test-utils'

describe('button is', () => {
  const clickHandler = vi.fn()
  it('in the document', () => {
    render(<Button title="sample" onClick={clickHandler} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('sample')
    expect(button).toMatchSnapshot()
  })
  it('clicked once', async () => {
    render(<Button title="sample" onClick={clickHandler} />)
    const user = userEvent.setup()
    const button = screen.getByRole('button')
    await user.click(button)
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
