import { getTimeLeft, isFinished } from '@utils/getTimeLeft'

describe('getTimeLeft', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should calculate time difference', () => {
    const date = new Date(2022, 4, 23, 11, 12, 11, 0)
    vi.setSystemTime(date)

    const targetTime = {
      day: 5,
      hour: 18,
      minute: 0,
      second: 0,
    }
    const timeLeft = getTimeLeft(targetTime)
    expect(timeLeft).toMatchObject({
      days: 4,
      hours: 6,
      minutes: 47,
      seconds: 49,
    })
  })

  it('should return zeros for time difference if no time left', () => {
    const date = new Date(2022, 4, 27, 18, 12, 11, 0)
    vi.setSystemTime(date)

    const targetTime = {
      day: 5,
      hour: 18,
      minute: 0,
      second: 0,
    }
    const timeLeft = getTimeLeft(targetTime)
    expect(timeLeft).toMatchObject({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('isFinished', () => {
  it('should return true if no time left', () => {
    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
    expect(isFinished(timeLeft)).toBe(true)
  })

  it('should return false if time left', () => {
    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
    }
    expect(isFinished(timeLeft)).toBe(false)
  })
})
