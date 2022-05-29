import useCountdown from '@hooks/useCountdown'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it('should decrement 1 second', () => {
    const date = new Date(2022, 4, 23, 11, 12, 11, 0)
    vi.setSystemTime(date)
    act(() => {
      vi.runOnlyPendingTimers()
    })
    const { result } = renderHook(() =>
      useCountdown({ day: 5, hour: 18, minute: 0, second: 0 })
    )
    expect(result.current.seconds).toBe(49)
    act(() => {
      vi.runOnlyPendingTimers()
    })
    expect(result.current.seconds).toBe(48)
  })
})
