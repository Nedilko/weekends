import Clock from '@components/Clock/Clock'
import { render } from '@utils/test-utils'
import { vi } from 'vitest'

vi.mock('@components/Clock/DigitBlock', () => {
  return {
    default: () => {
      return <div></div>
    },
  }
})

describe('Clock', () => {
  it('should render', () => {
    const { container } = render(
      <Clock time={{ days: 1, hours: 1, minutes: 1, seconds: 1 }} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render without days', () => {
    const { container } = render(
      <Clock time={{ days: 0, hours: 1, minutes: 1, seconds: 1 }} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render without days and hours', () => {
    const { container } = render(
      <Clock time={{ days: 0, hours: 0, minutes: 1, seconds: 1 }} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render without days, hours and minutes', () => {
    const { container } = render(
      <Clock time={{ days: 0, hours: 0, minutes: 0, seconds: 1 }} />
    )
    expect(container).toMatchSnapshot()
  })
})
