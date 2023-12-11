export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(mainArray,startIdx,endIdx,auxiliaryArray,animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }



  export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    
    getQuickSortAnimationshelper (array, 0, array.length - 1, animations )
    return animations;

}



  function getQuickSortAnimationshelper(mainArray, startIdx, endIdx, animations) {
    if (startIdx >= endIdx || mainArray.length <= 1) { 
        return;}

  let index = doQuickSort (mainArray, startIdx, endIdx, animations);
  getQuickSortAnimationshelper(mainArray, startIdx, index - 1, animations);
  getQuickSortAnimationshelper(mainArray, index + 1, endIdx, animations);
  }

  function doQuickSort (mainArray, startIdx, endIdx, animations) {
    
    let pivotIndex = startIdx;
    let pivotValue = mainArray[endIdx];

    for (let i = startIdx; i < endIdx; i++) {
      animations.push([i, endIdx, "isColorChange1"]);
      animations.push([i, endIdx, "isNotColorChange"]);
      

      if (mainArray[i] < pivotValue) {
        animations.push([i, pivotIndex, "isColorChange3"]);
      

        swap (mainArray, i, pivotIndex);
        pivotIndex++;
      } 

      
    }
    
    
    animations.push([pivotIndex, endIdx, "isColorChange3"]);
    swap(mainArray, pivotIndex, endIdx);
    return pivotIndex;
  }



  
 function swap (array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }