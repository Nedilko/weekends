import TextInput from '@UI/Inputs/TextInput'
import { render, screen, vi, fireEvent } from '@utils/test-utils'

describe('text input is', () => {
  const changeHandler = vi.fn()
  beforeEach(() => {
    render(
      <TextInput
        placeholder="sample placeholder"
        value="sample"
        onChange={changeHandler}
      />
    )
  })
  it('in the document', () => {
    const textInput = screen.getByTestId('greetings-text-input')
    expect(textInput).toBeInTheDocument()
    expect(textInput).toMatchSnapshot()
  })
  it('clicked once', async () => {
    const textInput = screen.getByTestId('greetings-text-input')
    fireEvent.change(textInput, { target: { value: 'have a beer' } })
    expect(changeHandler).toHaveBeenCalledWith('have a beer')
    expect(textInput).toHaveValue('have a beer')
  })
  it('empty', async () => {
    const textInput = screen.getByTestId('greetings-text-input')
    fireEvent.change(textInput, { target: { value: '' } })
    expect(textInput).toMatchSnapshot()
  })
})
