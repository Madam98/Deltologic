export default function findWaterBlocks(heights: number[]): number[][] {
    const waterBlocks: number[][] = [];
    const maxHeight = Math.max(...heights);
    for (let i = 0; i < maxHeight; i ++){
        for (let j = 1; j < heights.length - 1; j++) {
            if ( heights[j] - 1 < i){ 
                let leftFound = false;
                let rightFound = false;
                //BADANIE LEWEJ STRONY
                for (let k = j - 1; k >= 0; k--) {
                    if (heights[k] - 1 >= i) {
                      leftFound = true;
                      break;
                    }
                  }
                //BADANIE PRAWEJ STRONY
                for (let k = j + 1; k < heights.length; k++) {
                    if (heights[k] - 1 >= i) {
                      rightFound = true;
                      break;
                    }
                  }
                if (leftFound && rightFound) {
                    waterBlocks.push([j, i]);
                  }
            }
        }
    }
    return waterBlocks;
}
  