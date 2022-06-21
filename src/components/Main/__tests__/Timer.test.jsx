import { render, screen } from '@utils/test-utils'
import { act } from 'react-dom/test-utils'
import Timer from '@components/Main/Timer'
import { useSettingsData } from '@store/Settings'

vi.mock('@store/Settings')

vi.mock('@components/Main/ActionText', () => {
  return {
    default: () => {
      return <div data-testid="action-text">Action text</div>
    },
  }
})

vi.mock('@components/Clock/Clock', () => {
  return {
    default: ({ time }) => {
      return <div data-testid="seconds">{time.seconds}</div>
    },
  }
})

describe('Timer', () => {
  const onFinishHandler = vi.fn()

  beforeEach(() => {
    onFinishHandler.mockClear()
    useSettingsData.mockClear()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should render', () => {
    const date = new Date(2022, 4, 23, 18, 12, 11, 0)
    vi.setSystemTime(date)
    useSettingsData.mockImplementation(() => ({ day: 5, hour: 18 }))
    const { container } = render(<Timer onFinish={onFinishHandler} />)
    expect(screen.getByTestId('action-text')).toBeInTheDocument()
    expect(screen.getByTestId('seconds')).toBeInTheDocument()
    expect(onFinishHandler).not.toBeCalled()
    expect(container).toMatchSnapshot()
  })

  it('should trigger onFinish when time finishes', () => {
    const date = new Date(2022, 4, 23, 18, 0, 0, 0)
    vi.setSystemTime(date)
    useSettingsData.mockImplementation(() => ({ day: 1, hour: 18 }))
    render(<Timer onFinish={onFinishHandler} />)
    expect(onFinishHandler).toBeCalled()
  })

  it('should trigger onFinish on next tick', () => {
    const date = new Date(2022, 4, 23, 17, 59, 59, 0)
    vi.setSystemTime(date)
    useSettingsData.mockImplementation(() => ({ day: 1, hour: 18 }))
    render(<Timer onFinish={onFinishHandler} />)
    const secondsLeft = screen.getByTestId('seconds')
    expect(secondsLeft).toHaveTextContent('1')
    act(() => {
      vi.runOnlyPendingTimers()
    })
    expect(secondsLeft).toHaveTextContent('0')
    expect(onFinishHandler).toHaveBeenCalledTimes(1)
  })
})
