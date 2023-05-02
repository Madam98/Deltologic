import calculateWaterVolume from '../src/services/waterVolume';


describe('calculateWaterVolume', () => {
  it('should return 2 for [3, 2, 4, 1, 2]', () => {
    const heights = [3, 2, 4, 1, 2];
    const volume = calculateWaterVolume(heights);
    expect(volume).toBe(2);
  });

  it('should return 8 for [4, 1, 1, 0, 2, 3]', () => {
    const heights = [4, 1, 1, 0, 2, 3];
    const volume = calculateWaterVolume(heights);
    expect(volume).toBe(8);
  });

  it('should return 0 for []', () => {
    const heights: number[] = [];
    const volume = calculateWaterVolume(heights);
    expect(volume).toBe(0);
  });

  it('should return 0 for [1]', () => {
    const heights = [1];
    const volume = calculateWaterVolume(heights);
    expect(volume).toBe(0);
  });

  it('should return 0 for [1, 2]', () => {
    const heights = [1, 2];
    const volume = calculateWaterVolume(heights);
    expect(volume).toBe(0);
  });

  it('should return 18 for [1, 0, 4, 2, 3, 4, 6, 4, 8, 6, 8, 6, 5, 4, 8, 1, 2]', () => {
    const heights = [1, 0, 4, 2, 3, 4, 6, 4, 8, 6, 8, 6, 5, 4, 8, 1];
    const volume = calculateWaterVolume(heights);
    expect(volume).toBe(18);
  });


});
