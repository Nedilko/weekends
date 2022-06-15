import TextInput from '@UI/Inputs/TextInput'
import { render, screen, userEvent } from '@utils/test-utils'

describe('TextInput', () => {
  const changeHandler = vi.fn()

  beforeEach(() => {
    changeHandler.mockClear()
  })

  it('should render valid', () => {
    render(
      <TextInput
        placeholder="sample placeholder"
        value="sample"
        onChange={changeHandler}
      />
    )
    expect(screen.getByTestId('greetings-text-input')).toMatchSnapshot()
  })

  it('should render invalid', async () => {
    const user = userEvent.setup()
    render(
      <TextInput
        placeholder="sample placeholder"
        value="sample"
        onChange={changeHandler}
      />
    )
    const input = screen.getByTestId('greetings-text-input')
    await user.clear(input)
    expect(input).toMatchSnapshot()
    await user.type(input, '   ')
    expect(input).toMatchSnapshot()
  })

  it('should call change handler with typed value', async () => {
    const user = userEvent.setup()
    render(
      <TextInput
        placeholder="sample placeholder"
        value="sample"
        onChange={changeHandler}
      />
    )
    const input = screen.getByTestId('greetings-text-input')
    await user.clear(input)
    await user.type(input, 'have a beer')
    expect(changeHandler).toHaveBeenCalledWith('have a beer')
  })
})
