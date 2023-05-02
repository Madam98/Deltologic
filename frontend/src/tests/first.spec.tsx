import findWaterBlocks from '../utils/findWaterBlocks';

describe('findWaterBlockse', () => {
  it('should return the correct coordinates', () => {
    const surfaceArray = [3, 2, 4, 1, 2];
    const expectedWatterCor = new Set ([[1, 2], [3, 1]]);
    expect(new Set(findWaterBlocks(surfaceArray))).toEqual(expectedWatterCor);
  });
  it('should return the correct coordinates', () => {
    const surfaceArray = [4, 1, 1, 0, 2, 3];
    const expectedWatterCor = new Set ([[3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [4, 2]]);
    expect(new Set(findWaterBlocks(surfaceArray))).toEqual(expectedWatterCor);
  });
  it('should return the correct coordinates', () => {
    const surfaceArray = [3, 3, 3, 3];
    const expectedWatterCor = new Set ([]);
    expect(new Set(findWaterBlocks(surfaceArray))).toEqual(expectedWatterCor);
  });

  it('should return the correct coordinates', () => {
    const surfaceArray = [1, 0, 4, 2, 3, 4, 6, 4, 8, 6, 8, 6, 5, 4, 8, 1, 2];
    const expectedWatterCor = new Set ([[1, 0], [15, 1], [3, 2], [3, 3], [4, 3], [7, 4], [13, 4], [7, 5], [12, 5], [13, 5], [9, 6], [11, 6], [12, 6], [13, 6], [9, 7], [11, 7], [12, 7], [13, 7]]);
    expect(new Set(findWaterBlocks(surfaceArray))).toEqual(expectedWatterCor);
  });

});