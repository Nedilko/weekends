import Description from '@components/Main/Description'
import { render, screen } from '@utils/test-utils'

describe('description text', () => {
  it('is visible', () => {
    render(<Description />)
    const title = screen.getByRole('heading')
    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
