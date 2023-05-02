export default function calculateWaterVolume(heights: number[]): number {
    
    console.log(heights)

    
    if (heights.length < 2) {
      return 0;
    }

    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let volume = 0;
  
    while (left < right) {
      if (heights[left] > leftMax) {
        leftMax = heights[left];
      }
      if (heights[right] > rightMax) {
        rightMax = heights[right];
      }
  
      if (leftMax < rightMax) {
        volume += leftMax - heights[left];
        left++;
      } else {
        volume += rightMax - heights[right];
        right--;
      }
    }
  
    return volume;
  }
