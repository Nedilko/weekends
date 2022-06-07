import Clock from '@components/Clock/Clock'
import { render } from '@utils/test-utils'

jest.mock('@components/Clock/Digit', () => {
  const originalModule = jest.requireActual('@components/Clock/Digit')
  return {
    __esModule: true,
    ...originalModule,
    default: () => <div data-testid="digit"></div>,
  }
})

jest.mock('@components/Clock/Separator', () => {
  const originalModule = jest.requireActual('@components/Clock/Separator')
  return {
    __esModule: true,
    ...originalModule,
    default: () => <div data-testid="separator"></div>,
  }
})

describe('Clock', () => {
  it('should render with all clock numbers and separators', () => {
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
