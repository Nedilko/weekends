import Button from '@UI/Buttons/Button'
import { render, screen, userEvent } from '@utils/test-utils'

describe('Button', () => {
  const clickHandler = vi.fn()

  beforeEach(() => {
    clickHandler.mockClear()
  })

  it('should be in the document', () => {
    render(<Button title="sample" onClick={clickHandler} />)
    expect(screen.getByRole('button')).toMatchSnapshot()
  })

  it('should handle click', async () => {
    render(<Button title="sample" onClick={clickHandler} />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button'))
    expect(clickHandler).toHaveBeenCalledOnce()
  })
})
