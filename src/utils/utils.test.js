import { formatTime } from './formatTime';

describe('utils', () => {
  describe('formatTime', () => {
    // Test 1
    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });
  });
  // Test 2
  it('should return null if arg is not a number', () => {
    expect(formatTime('abc')).toBe(null);
    expect(formatTime(() => {})).toBe(null);
  });
  // Test 3
  it('should return null if arg is lower than zero', () => {
    expect(formatTime(-1)).toBe(null);
    expect(formatTime(-2)).toBe(null);
  });
  // Test 4
  it('should return time in hh:mm:ss if arg is proper', () => {
    expect(formatTime(122)).toBe('00:02:02');
    expect(formatTime(3793)).toBe('01:03:13');
    expect(formatTime(120)).toBe('00:02:00');
    expect(formatTime(3604)).toBe('01:00:04');
  });
});
